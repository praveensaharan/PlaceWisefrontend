import React, { useEffect, useState, useRef } from "react";
import Navbar1 from "../components/Navbar";
import PostWrite from "../components/PostWrite";
import Footer1 from "../components/Footer";
import { useAuth } from "../components/AuthContext";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";
import { getAuth, onIdTokenChanged, signOut } from "firebase/auth"; // Import necessary Firebase functions

function Blog() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [emailVerified, setEmailVerified] = useState(false); // Initialize a state variable for email verification
  const [logoutTimer, setLogoutTimer] = useState(null); // Initialize the logout timer

  const auth = getAuth(); // Initialize the auth instance // Reset the timer whenever there's user activity

  const resetTimer = () => {
    clearTimeout(logoutTimer); // Set a new timer to sign out the user after 15 minutes of inactivity

    const newLogoutTimer = setTimeout(() => {
      signOut(auth) // Sign out the user
        .then(() => {
          navigate("/write"); // Redirect to the login page after sign-out
        })
        .catch((error) => {
          console.error("Error signing out:", error);
        });
    }, 1000 * 60 * 60);

    setLogoutTimer(newLogoutTimer);
  };

  useEffect(() => {
    // Listen to changes in the user's ID token
    const unsubscribe = onIdTokenChanged(auth, (user) => {
      if (user) {
        // Update the email verification state with the user's current status
        setEmailVerified(user.emailVerified); // Reset the logout timer on user activity

        resetTimer();
      }
    }); // Clean up the timer and unsubscribe from the auth listener when the component unmounts

    return () => {
      clearTimeout(logoutTimer);
      unsubscribe();
    };
  }, [auth]); // Only include the auth state variable in the dependency array

  return (
    <div>
      <Navbar1 />{" "}
      {user && emailVerified ? (
        <>
          <PostWrite />
          <Footer1 />
        </>
      ) : (
        // User is not logged in
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default Blog;
