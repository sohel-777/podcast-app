import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/common/Header";
import Button from "../components/common/Button";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../components/common/Loader";

function Profile() {
  const user = useSelector((state) => state.user.user);

  console.log("My User", user);
  if (!user) {
    return <Loader />;
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("User Logged Out!");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="profile" >
          <img src={user.profileImage} />
          <p>Name :~ {user.name}</p>
        <p>Email :~ {user.email}</p>
        <p>User ID :~ {user.uid}</p>
        
        </div>
       
        <Button  width={"300px"} text={"Logout"} onClick={handleLogout} />

        
      </div>

      
    </div>
  );
}

export default Profile;
