import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileForm from "./components/ProfileForm";
interface Profile {
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  pincode: string;
  email?: string;
  picture?: string;
  fullName?: string;
}

const App = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } =
    useAuth0();
  const [profile, setProfile] = useState<Profile>({
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    pincode: "",
    email: "",
    picture: "",
    fullName: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      if (user?.email) {
        console.log(user.email)
        const res = await fetch(`http://localhost:5000/api/user/${user.email}`);
        const data = await res.json();
        console.log(data)
        setProfile(data);
      }
    };

    if (isAuthenticated) fetchProfile();
  }, [isAuthenticated, user]);

  if (isLoading || (isAuthenticated && !profile)) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {!isAuthenticated ? (
        <div className="flex justify-center items-center h-screen">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        </div>
      ) : (
        <div className="p-6">
          <div className="text-right">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </button>
          </div>
          <ProfileForm initialData={profile} />
        </div>
      )}
    </div>
  );
};

export default App;
