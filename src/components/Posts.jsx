import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Base_url = "https://jobs-g0ol.onrender.com";

export default function PostsSection() {
  const [blogs, setBlogs] = useState([]);
  const [sorting, setSorting] = useState({
    criteria: "name",
    order: "ascending",
  });
  const colorCodes = [
    "ffc5b3", // Light Red
    "a1c9f2", // Light Blue
    "b3ffda", // Light Green
    "ffe1a3", // Light Yellow
    "d9b3ff", // Light Purple
    "b3ffe9", // Light Cyan
    "ffc5e2", // Light Pink
    "d8b3ff", // Light Lavender
    "b3ffd8", // Light Mint
    "f2b3ff", // Light Orchid
  ];
  function getBackgroundColor(name) {
    const firstLetter = name[0].toUpperCase();
    const charCode = firstLetter.charCodeAt(0);
    const colorIndex = charCode % colorCodes.length;
    return colorCodes[colorIndex];
  }
  const handleSortClick = (criteria) => {
    const order =
      sorting.criteria === criteria
        ? toggleSortOrder(sorting.order)
        : "ascending";

    setSorting({ criteria, order });
  };

  const toggleSortOrder = (order) =>
    order === "ascending" ? "descending" : "ascending";

  const sortedBlogs = [...blogs].sort((a, b) => {
    if (sorting.criteria === "name") {
      const comparison = a.name.localeCompare(b.name);
      return sorting.order === "ascending" ? comparison : -comparison;
    } else if (sorting.criteria === "date") {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      const comparison = dateA - dateB;
      return sorting.order === "ascending" ? comparison : -comparison;
    }
    return 0; // Default: no sorting
  });

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${Base_url}/jobs`);
      const data = await response.json();
      // console.log(data);
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  function formatDate(inputDate) {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(inputDate).toLocaleDateString(undefined, options);
  }

  return (
    <section className="py-24 lg:pt-20 lg:pb-32 bg-slate-100 overflow-hidden dark:bg-slate-700">
      <div className="container px-4 mx-auto">
        <h1 className="mb-10 tracking-tighter ml-10 bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-600 bg-clip-text text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent">
          All Companies
        </h1>
        <div className="m-3 flex flex-wrap justify-center items-center">
          <button
            onClick={() => handleSortClick("name")}
            className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-1 rounded mb-2 mr-2 w-64 text-sm"
          >
            Sort by Name
            <span className="text-xs ml-1 text-transform: uppercase font-semibold text-red-300">
              ({sorting.order})
            </span>
            <span className="text-xs ml-1">Tap to Toggle</span>
          </button>

          <button
            onClick={() => handleSortClick("date")}
            className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-1 rounded mb-2 mr-2 w-64 text-sm"
          >
            Sort by Date
            <span className="text-xs ml-1 text-transform: uppercase font-semibold text-blue-300">
              {" "}
              ({sorting.order})
            </span>
            <span className="text-xs ml-1">Tap to Toggle</span>
          </button>
        </div>

        <div className="flex flex-wrap -m-4">
          {sortedBlogs.map((item) => (
            <div className="xl:w-1/4 md:w-1/2 p-4 w-full" key={item._id}>
              <Link to={`/blog/${item._id}`}>
                <div className="flex-1 flex flex-col h-full bg-blue-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 p-6 rounded-lg border-2 border-solid border-indigo-300">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={`http://avatar-g88m.onrender.com/generate-image?name=${encodeURIComponent(
                      item.name
                    )}&color=${getBackgroundColor(item.name)}`}
                    alt={`Company Image ${item.name}`}
                  />
                  <div className="flex mb-5">
                    <div className="flex-1 flex items-start justify-start">
                      <div className="p-1 bg-gray-300 text-yellow-900 text-xs font-bold rounded">
                        {item.college}
                      </div>
                    </div>
                    <div className="flex-1 flex items-end justify-end">
                      <div className="p-1 bg-gray-800 text-white text-xs font-bold rounded">
                        CPI : {item.cpi}
                      </div>
                    </div>
                  </div>

                  <h2 className="text-lg text-gray-900 font-semibold title-font mb-2 text-transform: uppercase dark:text-white">
                    {item.name}
                  </h2>

                  <p
                    className="flex pl-1 pt-1 w-[90%] text-xs text-gray-500 dark:text-gray-300"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.description}
                  </p>
                  <div className="flex mt-auto pt-3">
                    <h3 className="flex-1 text-left tracking-widest text-xs text-black-600 font-bold title-font p-1 bg-green-200 rounded">
                      Ctc: {item.ctc} lacs.
                    </h3>
                    <h3 className="flex-1 text-right tracking-widest title-font p-1 bg-gray-800 text-white text-xs font-bold rounded">
                      {formatDate(item.date)}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
