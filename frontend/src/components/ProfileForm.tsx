import React, { useState } from "react";

interface ProfileData {
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  pincode: string;
  email?: string;
  picture?: string;
  fullName?: string;
}

const ProfileForm = ({ initialData }: { initialData: ProfileData }) => {
  const [profile, setProfile] = useState<ProfileData>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Updated profile:", profile);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Sidebar */}
        <div className="bg-blue-700 text-white flex flex-col items-center justify-center p-6">
          <img
            src={profile.picture || "https://via.placeholder.com/100"}
            alt="User Avatar"
            className="w-28 h-28 rounded-full shadow-md border-4 border-white"
          />
          <h2 className="text-xl font-semibold mt-4">
            {profile.fullName || `${profile.firstName} ${profile.lastName}`}
          </h2>
          <p className="text-sm text-blue-100">{profile.email}</p>
        </div>

        {/* Form */}
        <div className="p-8 md:col-span-2">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-red-900">Edit Profile</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                name="city"
                value={profile.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={profile.pincode}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>

          <div className="mt-8 text-right">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
