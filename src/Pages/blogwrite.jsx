// Blog.js
import React from "react";
import Navbar1 from "../components/Navbar";
import PostWrite from "../components/PostWrite";
import Footer1 from "../components/Footer";
import { useAuth } from "../components/AuthContext"; // Import the useAuth hook
import Login from "../components/Login";

function Blog() {
  const { user } = useAuth(); // Access user information from AuthContext

  return (
    <div>
      <Navbar1 />
      {user ? (
        <>
          <PostWrite />
          <Footer1 />
        </>
      ) : (
        <>
          <Login />
          <Footer1 />
        </>
      )}
    </div>
  );
}

export default Blog;
