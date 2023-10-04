import UpBlog from "../Assets/blog.jpg";
import React, { useState } from "react";
const Base_url = "https://jobs-g0ol.onrender.com";
const s = [
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

export default function Write() {
  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [cpi, setCPI] = useState("");
  const [branch, setBranch] = useState("");
  const [college, setCollege] = useState("");
  const [ctc, setCtc] = useState("");
  const [gross, setGross] = useState("");
  const [test, setTest] = useState("");
  const [interview, setInterview] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const updatedDescription = description || "none";
    const updatedDate = date || getCurrentDate();
    const updatedTest = test || "none";

    await onSubmit(
      name,
      type,
      cpi,
      branch,
      college,
      ctc,
      gross,
      updatedTest,
      interview,
      updatedDate,
      updatedDescription
    );

    setName("");
    setType("");
    setCPI("");
    setBranch("");
    setCollege("");
    setCtc("");
    setGross("");
    setTest("");
    setInterview("");
    setDate("");
    setDescription("");
  };

  const onSubmit = async (
    name,
    type,
    cpi,
    branch,
    college,
    ctc,
    gross,
    test,
    interview,
    date,
    description
  ) => {
    try {
      const response = await fetch(`${Base_url}/register`, {
        method: "POST",
        body: JSON.stringify({
          name,
          type,
          cpi,
          branch,
          college,
          ctc,
          gross,
          test,
          interview,
          date,
          description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.warn(data);
      if (response.ok) {
        alert("Data saved successfully");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <section className="py-24 lg:pt-20 lg:pb-32 bg-slate-100 overflow-hidden dark:bg-slate-700">
      <div className="write my-6 dark:bg-slate-700 dark:text-white bg-slate-100">
        <h1 className="mb-10 tracking-tighter ml-10 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent">
          Add Your Company
        </h1>
        <div className="flex justify-center">
          <img
            className="max-w-full object-cover rounded-2xl mx-4 md:mx-40 w-full md:w-11/12 h-64 md:h-96 mb-5"
            src={UpBlog}
            alt=""
          />
        </div>

        <form className="writeForm relative" onSubmit={handleOnSubmit}>
          <div className="writeFormGroup mx-4 md:mx-40 mb-4 md:mb-8 flex flex-wrap items-center">
            <input
              className="border-2 w-full sm:w-11/12 md:w-[70%] border-blue-100 bg-white h-10 mb-4 pr-5 pl-3 rounded-lg text-sm focus:outline-none hover:bg-slate-200 hover:border-blue-200  dark:bg-gray-800 dark:placeholder:text-slate-100"
              type="text"
              placeholder="Company Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="border-2 w-full sm:w-11/12 md:w-[70%] border-blue-100 bg-white h-10 mb-4 pr-5 pl-3 rounded-lg text-sm focus:outline-none hover:bg-slate-200 hover:border-blue-200  dark:bg-gray-800 dark:placeholder:text-slate-100"
              type="text"
              placeholder="Job Role (Software Development Engineer, Finance, Machine Learning, etc.)"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <select
              className="border-2 w-full sm:w-11/12 md:w-[70%] border-blue-100 bg-white h-10 mb-4 pr-5 pl-3 rounded-lg text-sm focus:outline-none hover:bg-slate-200 hover:border-blue-200 dark:bg-gray-800"
              value={cpi}
              onChange={(e) => setCPI(e.target.value)}
              required
            >
              <option value="" disabled hidden>
                Select CPI Cutoff
              </option>
              <option value="None">None</option>
              <option value="6.0+">6.0+</option>
              <option value="6.5+">6.5+</option>
              <option value="7.0+">7.0+</option>
              <option value="7.5+">7.5+</option>
              <option value="8.0+">8.0+</option>
              <option value="8.5+">8.5+</option>
              <option value="9.0+">9.0+</option>
            </select>

            <select
              className="border-2 w-full sm:w-11/12 md:w-[70%] border-blue-100 bg-white h-10 mb-4 pr-5 pl-3 rounded-lg text-sm focus:outline-none hover:bg-slate-200 hover:border-blue-200 dark:bg-gray-800"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              required
            >
              <option value="" disabled hidden>
                Select Branch Option
              </option>
              <option value="Only CS">Only CS</option>
              <option value="Only CS and elec">Only CS and Elec</option>
              <option value="Only Circuit">Only Circuit</option>
              <option value="Only Core">Only Core</option>
              <option value="All">All</option>
            </select>

            <select
              className="border-2 w-full sm:w-11/12 md:w-[70%] border-blue-100 bg-white h-10 mb-4 pr-5 pl-3 rounded-lg text-sm focus:outline-none hover:bg-slate-200 hover:border-blue-200 dark:bg-gray-800"
              value={college} // Use `college` here
              onChange={(e) => setCollege(e.target.value)}
              required
            >
              <option value="">Select College</option>
              {s.map(
                (
                  collegeOption // Change variable name here to avoid conflict
                ) => (
                  <option key={collegeOption} value={collegeOption}>
                    {collegeOption}
                  </option>
                )
              )}
            </select>

            <input
              className="border-2 w-full sm:w-11/12 md:w-[70%] border-blue-100 bg-white h-10 mb-4 pr-5 pl-3 rounded-lg text-sm focus:outline-none hover:bg-slate-200 hover:border-blue-200  dark:bg-gray-800 dark:placeholder:text-slate-100"
              type="number"
              placeholder="Cost to Company (CTC in lakhs)"
              value={ctc}
              onChange={(e) => setCtc(e.target.value)}
              required
            />
            <input
              className="border-2 w-full sm:w-11/12 md:w-[70%] border-blue-100 bg-white h-10 mb-4 pr-5 pl-3 rounded-lg text-sm focus:outline-none hover:bg-slate-200 hover:border-blue-200  dark:bg-gray-800 dark:placeholder:text-slate-100"
              type="number"
              placeholder="Gross Salary (Inhand in lakhs)"
              value={gross}
              onChange={(e) => setGross(e.target.value)}
              required
            />
            <input
              className="border-2 w-full sm:w-11/12 md:w-[70%] border-blue-100 bg-white h-10 mb-1 pr-5 pl-3 rounded-lg text-sm focus:outline-none hover:bg-slate-200 hover:border-blue-200  dark:bg-gray-800 dark:placeholder:text-slate-100"
              type="text"
              placeholder="Test Types (if Any) - Specify any required tests (e.g., Aptitude, Coding, Technical)"
              value={test}
              onChange={(e) => setTest(e.target.value)}
            />
            <select
              className="border-2 w-full sm:w-11/12 md:w-[70%] border-blue-100 bg-white h-10 mb-1 pr-5 pl-3 rounded-lg text-sm focus:outline-none hover:bg-slate-200 hover:border-blue-200 dark:bg-gray-800"
              value={interview}
              onChange={(e) => setInterview(e.target.value)}
              required
            >
              <option value="" disabled hidden>
                --- Select Number of Interviews ---
              </option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>

            <input
              className="border-2 w-full sm:w-11/12 md:w-[70%] border-blue-100 bg-white h-10 mb-4 pr-5 pl-3 rounded-lg text-sm focus:outline-none hover:bg-slate-200 hover:border-blue-200 dark:bg-gray-800"
              type="date"
              placeholder="Date of Company Visit (dd/mm/yyyy)"
              value={date}
              onChange={(e) => {
                const enteredDate = e.target.value;
                // Check if the entered date is empty, and if so, set it to today's date
                setDate(enteredDate);
              }}
            />
          </div>
          <div className="writeFormGroup mx-4 md:mx-40">
            <textarea
              className="writeInput writeText mt-1 p-4 md:p-6 w-full md:w-11/12 h-96 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-800"
              style={{ whiteSpace: "pre-wrap" }} // Apply white-space: pre-wrap to preserve spaces
              placeholder="Job Description................ Steps involved in the interview......"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              autoFocus={false}
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition duration-200 focus:outline-none focus:bg-blue-600"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
