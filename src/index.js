import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import BlogView from "./Pages/blog";
import BlogWrite from "./Pages/blogwrite";
import Login from "./components/Login";
import Signup from "./Pages/Signup";
import { AuthProvider } from "./components/AuthContext"; // Import AuthProvider
// import Login from "./components/Login";
import BlogViewId from "./Pages/blogview";
import Collage from "./Pages/collage";

const root = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<BlogView />} />
          <Route path="/write" element={<BlogWrite />} />
          <Route path="/blog/:id" element={<BlogViewId />} />
          <Route path="/learn-more/:collegeName" element={<Collage />} />
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  root
);
