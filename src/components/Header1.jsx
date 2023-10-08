import React from "react";
import "./Header1.css";
import Type from "./Typing";

export default function Header() {
  return (
    <React.Fragment>
      <div className="flex flex-col md:flex-row mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center dark:bg-slate-500">
        <div className="w-full md:w-1/2 py-8 px-4 text-center">
          <Type />
        </div>
        <div className="w-full md:w-1/2 py-8 px-4">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent sm:text-5xl">
            Find Your Perfect Fit
            <span className="sm:block"> Your Style, Your Tailor </span>
          </h1>
          <p className="mt-4 max-w-xl text-xl text-gray-800 dark:text-gray-100">
            No two individuals are the same, and we celebrate that diversity.
            Our tailors are dedicated to understanding your unique style
            preferences and body shape, ensuring that your garments are not just
            clothes but an extension of your personality.
          </p>
        </div>
      </div>

      <div className="bg-blue-300">
        <ul className="circles">
          <li className="left-1/4 w-20 h-20 animate-circles delay-0 animate-move dark:bg-gray-600"></li>
          <li className="left-10 w-20 h-20 animate-circles delay-2000 duration-12000 animate-move dark:bg-gray-600"></li>
          <li className="left-70 w-20 h-20 animate-circles delay-4000 animate-move dark:bg-gray-500"></li>
          <li className="left-40 w-60 h-60 animate-circles delay-0 duration-18000 animate-move dark:bg-gray-600"></li>
          <li className="left-65 w-20 h-20 animate-circles delay-0 animate-move dark:bg-gray-500"></li>
          <li className="left-75 w-110 h-110 animate-circles delay-3000 animate-move dark:bg-red-900"></li>
          <li className="left-35 w-150 h-150 animate-circles delay-7000 animate-move dark:bg-blue-900"></li>
          <li className="left-1/2 w-25 h-25 animate-circles delay-15000 duration-45000 animate-move dark:bg-blue-900"></li>
          <li className="left-1/5 w-15 h-15 animate-circles delay-2000 duration-35000 animate-move dark:bg-blue-900"></li>
          <li className="left-85 w-150 h-150 animate-circles delay-0 duration-11000 animate-move dark:bg-blue-900"></li>
        </ul>
      </div>
    </React.Fragment>
  );
}
