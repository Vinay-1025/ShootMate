import React, { useState } from 'react';

const Profile = () => {
    const [profile, setProfile] = useState({
        name: '',
        bio: '',
        profilePicture: null,
        cameraPicture: null,
    });

    const [portfolio, setPortfolio] = useState([]);
    const [equipment, setEquipment] = useState({
        cameraType: '',
        lenses: [],
        accessories: [],
    });

    const [pricing, setPricing] = useState('');

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleProfilePictureUpload = (e, type) => {
        const file = e.target.files[0];
        if (!file) return;
        setProfile((prev) => ({
            ...prev,
            [type]: URL.createObjectURL(file),
        }));
    };

    const handlePortfolioUpload = (e) => {
        const files = Array.from(e.target.files);
        const newPortfolio = files.map((file) => ({
            id: Date.now() + Math.random(),
            url: URL.createObjectURL(file),
        }));
        setPortfolio((prev) => [...prev, ...newPortfolio]);
    };

    const handleEquipmentChange = (field, value) => {
        setEquipment((prev) => ({ ...prev, [field]: value }));
    };

    const handlePricingChange = (e) => {
        setPricing(e.target.value);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8 shadow-xl">
            <div className="mx-auto bg-white shadow-lg rounded-lg p-6 ">
                {/* Profile Section */}
                <h2 className="text-2xl font-bold mb-4">Profile Management</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-6">
                    <div className="flex flex-col items-center">
                        <label htmlFor="profilePicture" className="cursor-pointer">
                            <img
                                src={profile.profilePicture || 'https://via.placeholder.com/100'}
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover mb-2"
                            />
                            <p className="text-sm text-gray-500">Upload Profile Picture</p>
                        </label>
                        <input
                            id="profilePicture"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleProfilePictureUpload(e, 'profilePicture')}
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <label htmlFor="cameraPicture" className="cursor-pointer">
                            <img
                                src={profile.cameraPicture || 'https://via.placeholder.com/100'}
                                alt="Camera"
                                className="w-24 h-24 rounded-full object-cover mb-2"
                            />
                            <p className="text-sm text-gray-500">Upload Camera Picture</p>
                        </label>
                        <input
                            id="cameraPicture"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleProfilePictureUpload(e, 'cameraPicture')}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={profile.name}
                        onChange={handleProfileChange}
                        className="w-full border border-gray-300 rounded px-4 py-2"
                    />
                    <textarea
                        name="bio"
                        placeholder="Bio"
                        value={profile.bio}
                        onChange={handleProfileChange}
                        className="w-full border border-gray-300 rounded px-4 py-2"
                    ></textarea>
                </div>

                {/* Portfolio Section */}
                <h3 className="text-xl font-bold mb-2">Portfolio</h3>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePortfolioUpload}
                    className="mb-4"
                />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {portfolio.map((item) => (
                        <img
                            key={item.id}
                            src={item.url}
                            alt="Sample Work"
                            className="w-full h-32 object-cover rounded shadow"
                        />
                    ))}
                </div>

                {/* Equipment Section */}
                <h3 className="text-xl font-bold mt-6 mb-2">Camera Equipment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <input
                        type="text"
                        placeholder="Camera Type"
                        value={equipment.cameraType}
                        onChange={(e) => handleEquipmentChange('cameraType', e.target.value)}
                        className="w-full border border-gray-300 rounded px-4 py-2"
                    />
                    <textarea
                        placeholder="Lenses (comma separated)"
                        value={equipment.lenses.join(', ')}
                        onChange={(e) =>
                            handleEquipmentChange('lenses', e.target.value.split(',').map((l) => l.trim()))
                        }
                        className="w-full border border-gray-300 rounded px-4 py-2"
                    ></textarea>
                </div>
                <textarea
                    placeholder="Accessories (comma separated)"
                    value={equipment.accessories.join(', ')}
                    onChange={(e) =>
                        handleEquipmentChange('accessories', e.target.value.split(',').map((a) => a.trim()))
                    }
                    className="w-full border border-gray-300 rounded px-4 py-2 mb-6"
                ></textarea>

                {/* Pricing Section */}
                <h3 className="text-xl font-bold mb-2">Pricing</h3>
                <input
                    type="number"
                    placeholder="Price per session/hour (₹)"
                    value={pricing}
                    onChange={handlePricingChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                />

                <button className="bg-blue-600 text-white px-6 py-2 rounded shadow mt-4">
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default Profile;
