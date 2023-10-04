import React from "react";

export default function Header() {
  return (
    <section className="bg-blue-50 overflow-hidden dark:bg-slate-800 dark:text-white text-black">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Ready to start your
            <span className="sm:block">Placement journey?</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Welcome to Placewise, a dynamic online platform committed to
            facilitating your placement journey. We're dedicated to sharing
            knowledge, igniting inspiration, and making your placement process
            smoother, more informed, and enjoyable.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/blog"
            >
              Companies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
