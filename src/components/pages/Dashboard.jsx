import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';
import Profile from './Profile';

// Mock monthly data
const mockMonthlyData = {
    '2024-11': [
        {
            day: '2024-11-01',
            bookings: [
                { bookedBy: 'John Doe', timeSlot: '10:00 AM - 11:00 AM', type: 'Regular', status: 'Due' },
                { bookedBy: 'Jane Smith', timeSlot: '02:00 PM - 03:00 PM', type: 'Premium', status: 'Completed' },
            ],
        },
        {
            day: '2024-11-02',
            bookings: [
                { bookedBy: 'Alice Johnson', timeSlot: '11:00 AM - 12:00 PM', type: 'Regular', status: 'Due' },
            ],
        },
        {
            day: '2024-11-30',
            bookings: [
                { bookedBy: 'Bob Brown', timeSlot: '03:00 PM - 04:00 PM', type: 'Regular', status: 'Completed' },
            ],
        },
    ],
};

const generateFullMonthData = (year, month, data) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const result = [];

    for (let day = 1; day <= daysInMonth; day++) {
        const formattedDay = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const entry = data.find((d) => d.day === formattedDay) || { day: formattedDay, bookings: [] };
        result.push(entry);
    }

    return result;
};

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const [bookingsData, setBookingsData] = useState([]);
    const [selectedDateBookings, setSelectedDateBookings] = useState([]);
    const [nextDayBookings, setNextDayBookings] = useState([]);

    useEffect(() => {
        const year = selectedDate.getFullYear();
        const month = selectedDate.getMonth();
        const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`;
        const monthlyData = mockMonthlyData[monthKey] || [];
        const fullMonthData = generateFullMonthData(year, month, monthlyData);
        setBookingsData(fullMonthData);

        // Normalize selected date (format: YYYY-MM-DD)
        const formattedSelectedDate = selectedDate.toISOString().split('T')[0]; // 'YYYY-MM-DD'

        // Calculate the next day's date
        const nextDay = new Date(selectedDate);
        nextDay.setDate(nextDay.getDate() + 1);
        const formattedNextDay = nextDay.toISOString().split('T')[0]; // 'YYYY-MM-DD'

        console.log(formattedNextDay);
        

        // Find the bookings for the selected date and next day
        const dayBookings = fullMonthData.find((d) => d.day === formattedNextDay)?.bookings || [];
        const nextDayBookingsData = fullMonthData.find((d) => d.day === formattedNextDay)?.bookings || [];

        setSelectedDateBookings(dayBookings);
        setNextDayBookings(nextDayBookingsData);
    }, [selectedDate]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setShowCalendar(false);
    };

    return (
        <div>
            <div className="min-h-screen p-4 sm:p-8 bg-gray-100 flex flex-col sm:flex-row gap-6">
            {/* Left Section: Calendar & Booking Cards */}
            <div className="w-full sm:w-1/3 bg-white p-6 shadow-md rounded mb-6 sm:mb-0">
                <div className="relative mb-6">
                    <button
                        onClick={() => setShowCalendar(!showCalendar)}
                        className="bg-secondary text-white px-4 py-2 shadow-xl rounded hover:bg-primary w-full"
                    >
                        {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </button>
                    {showCalendar && (
                        <div className="absolute top-12 left-0 right-0 bg-white p-2 rounded z-10">
                            <Calendar
                                onChange={handleDateChange}
                                value={selectedDate}
                                view="month"
                                maxDetail="month"
                                className="w-full sm:w-[320px] h-auto sm:h-[300px]"
                            />
                        </div>
                    )}
                </div>

                <h2 className="text-xl font-bold mb-4">Bookings Overview</h2>

                <div className="space-y-5 max-h-96 overflow-y-auto">
                    {selectedDateBookings.length > 0 ? (
                        selectedDateBookings.map((b, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded mb-2">
                                <div className="flex justify-between">
                                    <p className="font-semibold text-primary">{b.bookedBy}</p>
                                    <p className={`font-semibold ${b.status === 'Due' ? 'text-red-500' : 'text-green-500'}`}>
                                        {b.status}
                                    </p>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <p className="text-secondary">{b.type}</p>
                                    <p className="text-gray-500">{b.timeSlot}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No bookings for the selected date.</p>
                    )}
                </div>
            </div>

            {/* Right Section: Graph */}
            <div className="w-full sm:w-2/3 bg-white p-6 shadow-md rounded">
                <h2 className="text-xl font-bold mb-4">Monthly Booking & Cancellation Trends</h2>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                        data={bookingsData.map((day) => ({
                            day: day.day,
                            bookings: day.bookings.length,
                            cancellations: day.bookings.filter((b) => b.status === 'Completed').length,
                        }))}
                    >
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="day" tickFormatter={(tick) => new Date(tick).getDate()} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="bookings" stroke="#82ca9d" name="Bookings" />
                        <Line type="monotone" dataKey="cancellations" stroke="#ff7300" name="Cancellations" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>

        <Profile />
        </div>
    );
};

export default Dashboard;
