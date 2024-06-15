import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ProfilePage = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Profile</h2>
      {user ? (
        <div>
          <h3 className="text-xl">Username: {user.username}</h3>
        </div>
      ) : (
        <p>User not logged in.</p>
      )}
    </div>
  );
};

export default ProfilePage;
