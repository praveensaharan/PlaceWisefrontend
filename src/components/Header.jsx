import React from "react";
import "./Header1.css";
import Type from "./Typing";

export default function Header() {
  return (
    // <section className="bg-blue-50 overflow-hidden dark:bg-slate-800 dark:text-white text-black">
    //   <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    //     <div className="mx-auto max-w-3xl text-center">
    //       <h1 className="pb-0 sm:pb-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
    //         Ready to start your
    //         <span className="sm:block">Placement journey?</span>
    //       </h1>
    //       <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
    //         Welcome to Placewise, a dynamic online platform committed to
    //         facilitating your placement journey. We're dedicated to sharing
    //         knowledge, igniting inspiration, and making your placement process
    //         smoother, more informed, and enjoyable.
    //       </p>
    //       <div className="mt-8 flex flex-wrap justify-center gap-4">
    //         <a
    //           className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-300 hover:text-gray-800 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
    //           href="/blog"
    //         >
    //           Companies
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <React.Fragment>
      <section className="overflow-hidden dark:bg-slate-500 dark:text-white text-black">
        <div className="flex flex-col md:flex-row mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center dark:bg-slate-500">
          <div className="w-full md:w-1/2 py-8 px-4 text-center">
            <Type />
          </div>
          <div className="w-full md:w-1/2 py-8 px-4">
            <h1 className="pb-0 sm:pb-1 text-3xl font-extrabold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent sm:text-5xl">
              Ready to start your
              <span className="sm:block"> Placement Journey ? </span>
            </h1>
            <p className="mt-4 max-w-xl text-xl text-gray-800 dark:text-gray-100">
              Welcome to Placewise, a dynamic online platform committed to
              facilitating your placement journey. We're dedicated to sharing
              knowledge, igniting inspiration, and making your placement process
              smoother, more informed, and enjoyable.
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
      </section>
    </React.Fragment>
  );
}
