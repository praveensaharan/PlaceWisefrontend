import React from "react";
import Log from "./vhgb copy.png";
import Cards from "./test";

function index() {
  return (
    <div
      className="pb-16
      dark:bg-slate-500"
      style={{ fontFamily: '"Lato", sans-serif' }}
    >
      <div className="relative">
        <div className="absolute top-0 left-5 sm:left-20 w-[80%] h-5 bg-gradient-to-r from-pink-300 via-orange-200"></div>

        <div className="absolute top-0 left-10 sm:left-26 w-7 sm:w-20 h-full bg-gradient-to-r from-pink-300 via-orange-200 hidden sm:inline-block"></div>
        <dh-component>
          <section className="max-w-8xl mx-auto container bg-white pt-16 dark:bg-slate-500">
            <div>
              <div
                role="contentinfo"
                className="flex items-center flex-col px-2 py-2"
              >
                <p
                  tabIndex={0}
                  className="focus:outline-none uppercase text-sm text-center py-3 dark:text-slate-300 leading-4 text-slate-500"
                >
                  in few steps
                </p>
                <h1
                  tabIndex={0}
                  className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4"
                >
                  Get Comprehensive Information About the Companies Visiting
                  Your Campus
                </h1>
              </div>
              <Cards />
            </div>
          </section>
        </dh-component>
        <div className="h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
      </div>
    </div>
  );
}

export default index;
