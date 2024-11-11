import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaSearch, FaFilter } from 'react-icons/fa';

const photographersData = [
    { id: 1, name: 'PencilPhotg', rent: 550, rating: 5, popularity: 8, image: 'https://via.placeholder.com/150', slots: ['10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '01:00 PM - 02:00 PM'] },
    { id: 2, name: 'VenkyPics', rent: 500, rating: 3, popularity: 9, image: 'https://via.placeholder.com/150', slots: ['11:00 AM - 12:00 PM', '01:00 PM - 02:00 PM', '03:00 PM - 04:00PM'] },
    { id: 3, name: 'CharkriCliks', rent: 450, rating: 3, popularity: 7, image: 'https://via.placeholder.com/150', slots: ['9:00 AM - 10:00 AM', '11:00 AM - 12:00PM', '04:00 PM - 05:00 PM'] },
    { id: 4, name: 'PixelMasters', rent: 600, rating: 4, popularity: 6, image: 'https://via.placeholder.com/150', slots: ['08:00 AM - 09:00 AM', '02:00 PM - 03:00 PM', '04:00 PM - 05:00 PM'] },
    { id: 5, name: 'LunaLens', rent: 700, rating: 5, popularity: 9, image: 'https://via.placeholder.com/150', slots: ['10:00 AM - 11:00 AM', '12:00 PM - 01:00 PM', '03:00 PM - 04:00 PM'] },
    { id: 6, name: 'ShutterStudio', rent: 550, rating: 4, popularity: 8, image: 'https://via.placeholder.com/150', slots: ['09:00 AM - 10:00 AM', '11:00 AM - 12:00 PM', '02:00 PM - 03:00 PM'] },
    { id: 7, name: 'FocusFlare', rent: 450, rating: 3, popularity: 6, image: 'https://via.placeholder.com/150', slots: ['08:00 AM - 09:00 AM', '01:00 PM - 02:00 PM', '05:00 PM - 06:00 PM'] },
    { id: 8, name: 'SnapShots', rent: 600, rating: 5, popularity: 10, image: 'https://via.placeholder.com/150', slots: ['10:00 AM - 11:00 AM', '12:00 PM - 01:00 PM', '02:00 PM - 03:00 PM'] },
    { id: 9, name: 'PictureThis', rent: 550, rating: 4, popularity: 7, image: 'https://via.placeholder.com/150', slots: ['11:00 AM - 12:00 PM', '01:00 PM - 02:00 PM', '03:00 PM - 04:00 PM'] },
    { id: 10, name: 'ZoomIn', rent: 650, rating: 4, popularity: 8, image: 'https://via.placeholder.com/150', slots: ['09:00 AM - 10:00 AM', '12:00 PM - 01:00 PM', '04:00 PM - 05:00 PM'] }
];

const User = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [calendarVisible, setCalendarVisible] = useState(false);
    const [selectedPhotographer, setSelectedPhotographer] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState('');
    const [confirmation, setConfirmation] = useState(false);
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false); // Toggle filter visibility
    const [bookedSlots, setBookedSlots] = useState([]); // Store booked slots history
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

    const handleSlotBooking = (photographerId) => {
        setSelectedPhotographer(photographerId);
        setSelectedSlot('');
    };

    const confirmBooking = () => {
        setConfirmation(true);
        setTimeout(() => setConfirmation(false), 2000);
        setBookedSlots((prevSlots) => [
            ...prevSlots,
            {
                photographer: photographersData.find((p) => p.id === selectedPhotographer),
                slot: selectedSlot,
                date: selectedDate.toDateString()
            }
        ]);
        setSelectedPhotographer(null);
    };

    const toggleCalendar = () => {
        setCalendarVisible((prev) => !prev);
    };

    const filteredPhotographers = photographersData.filter((photographer) => {
        const matchesFilter =
            filter === 'All' ||
            (filter === 'Top Rated' && photographer.rating >= 4) ||
            (filter === 'Popular' && photographer.popularity >= 8) ||
            (filter === 'Budget' && photographer.rent <= 450);

        const matchesSearch = photographer.name.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-100 p-6 relative">
            <div className="flex justify-between items-center mb-6 flex-col md:flex-row">
                <div>
                    {/* Left: Date Button */}
                <button
                    onClick={toggleCalendar}
                    className="bg-secondary text-sm hover:bg-primary text-white px-4 py-2 rounded cursor-hover mb-4 md:mb-0 md:mr-5 mr-14 "
                >
                    {selectedDate.toDateString()}
                </button>

                {/* Bookings Button */}
                <button
                    onClick={() => setIsModalOpen(true)} // Open the modal
                    className="bg-secondary text-sm hover:bg-primary text-white px-4 py-2 rounded cursor-pointer mb-4 md:mb-0"
                >
                    Bookings
                </button>
                </div>

                {/* Right: Search Bar */}
                <div className="flex items-center border rounded w-full md:w-1/3 px-3 py-2 bg-white">
                    <input
                        type="text"
                        placeholder="Search photographers..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-grow outline-none text-sm"
                    />
                    <FaSearch className="text-gray-500" />
                </div>


            </div>


            {/* Filter Icon */}
            <FaFilter
                className="text-gray-600 cursor-pointer ml-4 mb-5"
                onClick={() => setShowFilters(!showFilters)} // Toggle filter visibility
            />
            {/* Filters displayed next to the Filter icon */}
            {showFilters && (
                <div className="flex gap-4 absolute left-0 top-25 bg-gray-300 shadow-lg rounded p-4 z-10">
                    {['All', 'Top Rated', 'Popular', 'Budget'].map((option) => (
                        <button
                            key={option}
                            onClick={() => setFilter(option)}
                            className={`px-4 py-2 rounded ${filter === option ? 'bg-primary text-white' : 'bg-secondary text-white'}`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}

            {/* Calendar */}
            {calendarVisible && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded p-4 z-10">
                    <Calendar value={selectedDate} onChange={setSelectedDate} />
                </div>
            )}

            {/* Photographers List */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {filteredPhotographers.map((photographer) => (
                    <div key={photographer.id} className="bg-white shadow-lg rounded-lg p-4">
                        <img src={photographer.image} alt={photographer.name} className="w-full h-32 object-cover rounded" />
                        <div className='flex justify-between'>
                            <div>
                                <h3 className="text-md font-bold mt-4 text-primary">{photographer.name}</h3>
                                <p className="text-gray-600 text-sm">Rent: ₹{photographer.rent}/Hr</p>
                            </div>
                            <button
                                onClick={() => handleSlotBooking(photographer.id)}
                                className="bg-teritary hover:bg-primary cursor-hover text-white text-sm mt-4 px-3 py-2 rounded"
                            >
                                Book Slot
                            </button>
                        </div>

                        {/* Slots for Booking */}
                        {selectedPhotographer === photographer.id && (
                            <div className="mt-4">
                                <h4 className="font-bold text-md">Available Slots:</h4>
                                {photographer.slots.map((slot, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedSlot(slot)}
                                        className={`w-full border text-left px-3 py-2 rounded-md mb-2 mt-1 ${selectedSlot === slot ? 'bg-primary text-white' : 'bg-secondary'}`}
                                    >
                                        {slot}
                                    </button>
                                ))}
                                <button
                                    onClick={confirmBooking}
                                    disabled={!selectedSlot}
                                    className={`w-full mt-4 px-3 py-2 rounded-md ${!selectedSlot ? 'bg-gray-400' : 'bg-primary text-white'}`}
                                >
                                    Confirm Booking
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Confirmation Message */}
            {confirmation && (
                <div className="bg-green-500 text-white p-4 rounded mt-4">
                    Booking confirmed!
                </div>
            )}

            {/* Modal for Booking History */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-lg w-full">
                        <h3 className="text-xl font-semibold mb-4">Booked History</h3>
                        {bookedSlots.length === 0 ? (
                            <p>No bookings made yet.</p>
                        ) : (
                            bookedSlots.map((booking, index) => (
                                <div key={index} className="bg-gray-100 p-4 mb-4 rounded-md">
                                    <h4 className="font-bold text-md">{booking.photographer.name}</h4>
                                    <p>{booking.slot}</p>
                                    <p>{booking.date}</p>
                                </div>
                            ))
                        )}
                        <button
                            onClick={() => setIsModalOpen(false)} // Close the modal
                            className="bg-primary text-white px-4 py-2 rounded mt-4"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default User;
