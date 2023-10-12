import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingComponent from "./Loading";

const Base_url = "https://jobs-g0ol.onrender.com";
// Define an array of colleges with their logos

const collegesList = [
  {
    name: "IIT Madras",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png",
  },
  {
    name: "IIT Delhi",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/1200px-Indian_Institute_of_Technology_Delhi_Logo.svg.png",
  },
  {
    name: "IIT Bombay",
    logo: "https://www.iitb.ac.in/sites/www.iitb.ac.in/themes/touchm/logo.png",
  },
  {
    name: "IIT Kharagpur",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/IIT_Kharagpur_Logo.svg",
  },
  {
    name: "IIT Kanpur",
    logo: "https://iitk.ac.in/new/data/iitk/images/IITK.png",
  },
  {
    name: "IIT Roorkee",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/6f/Indian_Institute_of_Technology_Roorkee_logo.png",
  },
  {
    name: "IISc Bangalore",
    logo: "https://iisc.ac.in/wp-content/uploads/2020/08/IISc_Master_Seal_Black_Transparent.png",
  },
  {
    name: "NIT Tiruchirappalli",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/NITT_logo.png",
  },
  {
    name: "VIT Vellore",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/1200px-Vellore_Institute_of_Technology_seal_2017.svg.png",
  },
  {
    name: "BITS Pilani",
    logo: "https://qph.cf2.quoracdn.net/main-qimg-58646d3b432f70760a70835324cfc5af",
  },
  {
    name: "NIT Surathkal",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png",
  },
  {
    name: "DTU Delhi",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/623b519dbdd2e_DTU_logo.png",
  },
  {
    name: "NIT Warangal",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/fb/National_Institute_of_Technology%2C_Warangal_logo.png",
  },
  {
    name: "NIT Rourkela",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/NIT_Rourkela_Colour_Logo.svg/1200px-NIT_Rourkela_Colour_Logo.svg.png",
  },
  {
    name: "NIT Calicut",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/This_is_the_logo_of_NIT_Calicut.svg/1200px-This_is_the_logo_of_NIT_Calicut.svg.png",
  },
  {
    name: "IIT Guwahati",
    logo: "https://event.iitg.ac.in/icann2019/Proceedings_LaTeX/2019/IITG_logo.png",
  },
  {
    name: "NIT Durgapur",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/NIT_Durgapur_Logo.svg/1200px-NIT_Durgapur_Logo.svg.png",
  },
  {
    name: "NIT Patna",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b5/National_Institute_of_Technology%2C_Patna_Logo.png",
  },
  {
    name: "IIT Hyderabad",
    logo: "https://people.iith.ac.in/subharath/images/logo.png",
  },
  {
    name: "NIT Allahabad",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/c2/Motilal_Nehru_National_Institute_of_Technology_Allahabad_logo.png",
  },
  {
    name: "Others",
    logo: "https://www.liblogo.com/img-logo/ec7074e07b-eckerd-college-logo-eckerd-college.png",
  },
  // Add more colleges here with their names and logo URLs
];

const CollegeCard = ({ collegeName }) => {
  // Create state to store information for this college
  const [collegeInfo, setCollegeInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from an API (you'll need to replace the API URL)
  useEffect(() => {
    fetch(`${Base_url}/jobs`)
      .then((response) => response.json())
      .then((data) => {
        // Filter companies for this college
        const companiesForCollege = data.filter(
          (company) => company.college === collegeName
        );
        // Update the state with the filtered data
        setCollegeInfo(companiesForCollege);
        setIsLoading(false); // Data has been fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false); // An error occurred
      });
  }, [collegeName]);

  // Calculate the average CTC and number of companies based on collegeInfo
  const calculateAverageCTC = () => {
    if (collegeInfo && collegeInfo.length > 0) {
      const totalCTC = collegeInfo.reduce(
        (sum, company) => sum + parseFloat(company.ctc),
        0
      );
      return (totalCTC / collegeInfo.length).toFixed(2);
    }
    return "N/A";
  };

  const calculateNumCompanies = () => {
    return collegeInfo ? collegeInfo.length : 0;
  };

  return (
    <div className="inline-block mx-4 my-4 relative overflow-hidden rounded-lg border-2 border-red-100 p-4 sm:p-6 lg:p-8 transform transition-transform hover:scale-105 duration-300 ease-in-out bg-red-50 bg-opacity-30 hover:bg-blue-50 hover:bg-opacity-80">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {collegeName}
          </h3>
        </div>

        <div className="hidden sm:block sm:shrink-0">
          {/* Display college logo or other info from collegeInfo */}
          {isLoading ? (
            <div className="h-16 w-16">
              <LoadingComponent />
            </div>
          ) : (
            <img
              alt={collegeName}
              src={
                collegesList.find((college) => college.name === collegeName)
                  ?.logo ||
                "https://www.liblogo.com/img-logo/ec7074e07b-eckerd-college-logo-eckerd-college.png"
              }
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          )}
        </div>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Avg. CTC</dt>
          <dd className="text-xs text-gray-500 font-semibold">
            {calculateAverageCTC()} lacs.
          </dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Companies</dt>
          <dd className="text-xs text-gray-500 font-semibold">
            {calculateNumCompanies()}
          </dd>
        </div>
      </dl>

      <Link to="/" className="inline-block justify-center items-center">
        <button
          className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
          </svg>
        </button>
      </Link>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 sm:ml-10">
      {collegesList.map((college) => (
        <CollegeCard key={college.name} collegeName={college.name} />
      ))}
    </div>
  );
};

export default CardList;
