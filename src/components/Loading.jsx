import React from "react";
import kimage from "../Assets/Hourglass.gif";
// import Header1 from "./Header1"; // Corrected import by capitalizing 'Header1'

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white dark:bg-gray-800">
      <img src={kimage} alt="Loading..." className="w-16 h-16 mb-4" />
      <p className="text-gray-600 text-lg font-semibold">
        "Patience is the key to success."
      </p>
    </div>
  );
};

export default LoadingSpinner;
