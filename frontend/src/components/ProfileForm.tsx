import React, { useState } from "react";

interface ProfileData {
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  pincode: string;
}

const ProfileForm = ({ initialData }: { initialData: ProfileData }) => {
  const [profile, setProfile] = useState<ProfileData>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Will call Express + Temporal here later
    console.log("Profile updated:", profile);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Edit Profile</h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {["firstName", "lastName", "phone", "city", "pincode"].map((field) => (
          <div key={field}>
            <label className="block mb-1 capitalize">{field}</label>
            <input
              type="text"
              name={field}
              value={(profile as any)[field]}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
            />
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
