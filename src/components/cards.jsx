import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingComponent from "./Loading";

const collegesList = [
  "IIT Madras",
  "IIT Delhi",
  "IIT Bombay",
  "IIT Kharagpur",
  "IIT Kanpur",
  "IIT Roorkee",
  "IISc Bangalore",
  "NIT Tiruchirappalli",
  "VIT Vellore",
  "BITS Pilani",
  "NIT Surathkal",
  "DTU Delhi",
  "NIT Warangal",
  "NIT Rourkela",
  "NIT Calicut",
  "IIT Guwahati",
  "NIT Durgapur",
  "NIT Patna",
  "IIT Hyderabad",
  "NIT Allahabad",
  "Others",
];

const Card = () => {
  return (
    <div className="inline-block mx-4 my-4 relative overflow-hidden rounded-lg border-2 border-red-100 p-4 sm:p-6 lg:p-8 transform transition-transform hover:scale-105 duration-300 ease-in-out bg-red-50 bg-opacity-30 hover:bg-blue-50 hover:bg-opacity-80">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            Collage Name
          </h3>
        </div>

        <div className="hidden sm:block sm:shrink-0">
          <img
            alt="Paul Clapton"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="h-16 w-16 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Avg. CTC</dt>
          <dd className="text-xs text-gray-500">38.11 lacs.</dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Companies </dt>
          <dd className="text-xs text-gray-500">35</dd>
        </div>
      </dl>

      <Link class="inline-block justify-center items-center" href="/">
        <button
          class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </button>
      </Link>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 sm:ml-10">
      {Array.from({ length: 20 }).map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default CardList;
