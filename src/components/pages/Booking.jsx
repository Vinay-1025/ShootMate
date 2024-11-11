import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Install with `npm install react-calendar`
import 'react-calendar/dist/Calendar.css';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookings, setBookings] = useState([
    // Sample booking data
    { id: 1, date: '2024-11-12', client: 'John Doe', status: 'Pending' },
  ]);
  const [notifications, setNotifications] = useState([]);
  const [waitlist, setWaitlist] = useState([]);
  const [analytics, setAnalytics] = useState({
    totalBookings: 10,
    popularSlot: '10 AM - 12 PM',
    earnings: 1200,
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBookingAction = (id, action) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, status: action } : booking
      )
    );
    setNotifications((prev) => [
      ...prev,
      `Booking ID ${id} has been ${action.toLowerCase()}`,
    ]);
  };

  const handleBlockDate = () => {
    setNotifications((prev) => [
      ...prev,
      `Date ${selectedDate.toDateString()} blocked.`,
    ]);
  };

  const addToWaitlist = (client) => {
    setWaitlist((prev) => [...prev, client]);
    setNotifications((prev) => [
      ...prev,
      `${client} added to the waitlist for ${selectedDate.toDateString()}.`,
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className=" mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Booking Management</h2>

        {/* Availability Section */}
        <h3 className="text-xl font-bold mb-2">Set Availability</h3>
        <Calendar onChange={handleDateChange} value={selectedDate} />
        <button
          onClick={handleBlockDate}
          className="bg-red-500 text-white px-4 py-2 rounded mt-4"
        >
          Block Selected Date
        </button>

        {/* Bookings Section */}
        <h3 className="text-xl font-bold mt-6 mb-2">Manage Bookings</h3>
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="flex justify-between items-center border p-4 rounded"
            >
              <div>
                <p>
                  <strong>Client:</strong> {booking.client}
                </p>
                <p>
                  <strong>Date:</strong> {booking.date}
                </p>
                <p>
                  <strong>Status:</strong> {booking.status}
                </p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleBookingAction(booking.id, 'Accepted')}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleBookingAction(booking.id, 'Declined')}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Waitlist Section */}
        <h3 className="text-xl font-bold mt-6 mb-2">Waitlist Management</h3>
        <button
          onClick={() => addToWaitlist('Jane Smith')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add to Waitlist
        </button>
        <ul className="list-disc pl-6 mt-2">
          {waitlist.map((client, index) => (
            <li key={index}>{client}</li>
          ))}
        </ul>

        {/* Dashboard Module */}
        <h3 className="text-xl font-bold mt-6 mb-2">Dashboard</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded shadow">
            <h4 className="font-bold">Upcoming Bookings</h4>
            <ul>
              {bookings
                .filter((booking) => booking.status === 'Accepted')
                .map((booking) => (
                  <li key={booking.id}>
                    {booking.client} - {booking.date}
                  </li>
                ))}
            </ul>
          </div>
          <div className="p-4 border rounded shadow">
            <h4 className="font-bold">Notifications</h4>
            <ul>
              {notifications.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
          <div className="p-4 border rounded shadow">
            <h4 className="font-bold">Analytics</h4>
            <p>Total Bookings: {analytics.totalBookings}</p>
            <p>Most Popular Slot: {analytics.popularSlot}</p>
            <p>Earnings: ${analytics.earnings}</p>
          </div>
        </div>

        {/* Communication & Notifications */}
        <h3 className="text-xl font-bold mt-6 mb-2">Communication</h3>
        <textarea
          placeholder="Message to client..."
          className="w-full border rounded px-4 py-2 mb-2"
        ></textarea>
        <button className="bg-primary text-white px-6 py-2 rounded">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Booking;
