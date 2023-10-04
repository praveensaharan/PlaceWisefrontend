import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import UserProfileTable from "./tablecom";

const Base_url = "https://jobs-g0ol.onrender.com";

export default function Write() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [comment, setComment] = useState(null);

  const fetchBlog = async () => {
    try {
      const response = await fetch(`${Base_url}/blog/${id}`);
      if (response.ok) {
        const data = await response.json();
        setBlog(data);
        // setUpvotes(data.upvotes);
      } else {
        console.error("Error fetching blog:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };
  const calculateDaysPassed = (date) => {
    const currentDate = new Date();
    const pastDate = new Date(date);
    const timeDifference = currentDate.getTime() - pastDate.getTime();
    const daysPassed = Math.floor(timeDifference / (1000 * 3600 * 24));

    if (daysPassed < 1) {
      const hoursPassed = Math.floor(timeDifference / (1000 * 3600));
      return hoursPassed + " hours";
    }

    return daysPassed + " days";
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${Base_url}/comments/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author,
          content,
        }),
      });

      if (response.ok) {
        alert("Comment posted successfully");
        setAuthor("");
        setContent("");
      } else {
        alert("Failed to post comment");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };
  const fetchComment = async () => {
    try {
      const response1 = await fetch(`${Base_url}/commentsget/${id}`);
      const data1 = await response1.json();
      setComment(data1);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  useEffect(() => {
    fetchBlog();
    fetchComment();
  }, []);
  function formatDate(inputDate) {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(inputDate).toLocaleDateString(undefined, options);
  }
  if (!blog) {
    return (
      <section className="py-24 lg:pt-20 lg:pb-32 bg-slate-100 dark:bg-slate-700 overflow-hidden">
        <div className="my-16 bg-slate-100 dark:bg-slate-700">
          <div className="flex flex-col sm:flex-row">
            <div>Blog not found</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 lg:pt-20 lg:pb-32 bg-slate-100 dark:bg-slate-700 overflow-hidden">
      <div className="write my-16 bg-slate-100 dark:bg-slate-700">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:flex-1">
            <div className="p-4 sm:p-8">
              <h1 className="text-xl cursor-pointer group-hover:text-blue-400 text-transform: uppercase font-bold group-hover:underline dark:text-gray-100 text-center">
                {blog.name}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 my-5">
                <div className="text-gray-500 font-medium tracking-tight dark:text-gray-300 text-center sm:text-left">
                  <span className="text-xm mr-2 text-gray-500 font-semibold dark:text-gray-400 italic">
                    College: {blog.college}
                  </span>
                </div>
                <div className="text-gray-500 text-xm font-medium tracking-tight dark:text-gray-300 text-center sm:text-right">
                  <span className="mr-4"> {formatDate(blog.date)}</span>
                </div>
              </div>

              <div className="flex w-full h-full justify-center my-3 text-gray-500 font-medium tracking-tight dark:text-gray-300">
                <img
                  className="object-cover rounded-2xl mx-4 sm:mx-40 mb-5"
                  style={{
                    width: "80%", // Set the width as a percentage
                    height: "80%", // Set the height as a percentage
                    minWidth: "200px", // Set the minWidth
                    minHeight: "150px", // Set the minHeight
                  }}
                  // src={imageURL}
                  src={`http://avatar-g88m.onrender.com/generate-image?name=${blog.name}`}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="sm:flex-1">
            {/* Content for the right side */}
            <div className="flex flex-col justify-center items-center my-5 sm:my-20 bg-slate-100 font-medium dark:text-gray-300 dark:bg-slate-700">
              {/* <UserProfileTable /> */}
              <div className="flex items-center justify-cente dark:bg-slate-700">
                <div className="flex justify-center">
                  <div className="overflow-auto lg:overflow-visible">
                    <table className="table bg-slate-100 border-separate text-sm w-full">
                      <tbody>
                        <tr className="dark:bg-gray-800">
                          <td className="pr-10">
                            <div className="flex align-items-center">
                              <div className="pr-5">
                                <img
                                  className="rounded-full h-12 w-12 object-cover"
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFMpqq_OM11NtcunpZrwWflGLvuS8D7mwmA&usqp=CAU"
                                  alt="unsplash image"
                                />
                              </div>
                              <div className="ml-3">
                                <div className="">Type</div>
                                <div className="text-gray-500">
                                  (SDE, ML...)
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="pl-10">
                            <span className="bg-blue-200 text-stone-800 rounded-md p-2">
                              {blog.type.length > 25
                                ? blog.type.substring(0, 35) + "..."
                                : blog.type}
                            </span>
                          </td>
                        </tr>
                        <tr className="dark:bg-gray-800">
                          <td className="pr-10 pt-3">
                            <div className="flex align-items-center">
                              <div className="pr-5">
                                <img
                                  className="rounded-full h-12 w-12 object-cover"
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRg4QWhScG1fl5m7d0zJXQMyDq_c69-kNSiUGyziwJsCBcIzrEC5nbG-DCMUU8DhG2J70&usqp=CAU"
                                  alt="unsplash image"
                                />
                              </div>
                              <div className="ml-3">
                                <div className="">CPI</div>
                                <div className="text-gray-500">Cutoff</div>
                              </div>
                            </div>
                          </td>
                          <td className="pl-10 pt-3">
                            <span className="bg-red-300 text-stone-800 rounded-md p-2">
                              {blog.cpi}
                            </span>
                          </td>
                        </tr>
                        <tr className="dark:bg-gray-800">
                          <td className="pr-10 pt-3">
                            <div className="flex align-items-center">
                              <div className="pr-5">
                                <img
                                  className="rounded-full h-12 w-12 object-cover"
                                  src="https://miro.medium.com/v2/resize:fit:1400/1*HUn4H_ieQDtWPV6V5kxrrg.jpeg"
                                  alt="unsplash image"
                                />
                              </div>
                              <div className="ml-3">
                                <div className="">Branch</div>
                                <div className="text-gray-500">opens for</div>
                              </div>
                            </div>
                          </td>
                          <td className="pl-10 pt-3">
                            <span className="bg-red-100 text-stone-800 rounded-md p-2">
                              {blog.branch}
                            </span>
                          </td>
                        </tr>
                        <tr className="dark:bg-gray-800">
                          <td className="pr-10 pt-3">
                            <div className="flex align-items-center">
                              <div className="pr-5">
                                <img
                                  className="rounded-full h-12 w-12 object-cover"
                                  src="https://www.mbaknol.com/wp-content/uploads/2013/07/Compensation-Meaning-Mbaknol.jpg.webp"
                                  alt="unsplash image"
                                />
                              </div>
                              <div className="ml-3">
                                <div className="">Compensation</div>
                                <div className="text-gray-500">lakhs</div>
                              </div>
                            </div>
                          </td>
                          <td className="pl-10 pt-3 sm:p-0">
                            {/* Row layout for small screens */}
                            <div className="flex flex-col sm:flex-row">
                              <span className="bg-green-300 text-stone-800 rounded-md pt-1 pb-1 mr-2">
                                CTC: {blog.ctc} lac.
                              </span>
                              <br className="block sm:hidden" />
                              <span className="bg-green-200 text-stone-800 rounded-md pt-1 pb- mr-2">
                                Gross: {blog.gross} lac.
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="dark:bg-gray-800">
                          <td className="pr-10 pt-3">
                            <div className="flex align-items-center">
                              <div className="pr-5">
                                <img
                                  className="rounded-full h-12 w-12 object-cover"
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-GZaQMrJNqV-2uuXWoltDpr5tlFJsagIVQ&usqp=CAU"
                                  alt="unsplash image"
                                />
                              </div>
                              <div className="ml-3">
                                <div className="">Interviews</div>
                                <div className="text-gray-500">Numbers</div>
                              </div>
                            </div>
                          </td>
                          <td className="pl-10 pt-3">
                            <span className="bg-orange-200 text-stone-800 rounded-md p-2">
                              {blog.interview}
                            </span>
                          </td>
                        </tr>
                        <tr className="dark:bg-gray-800">
                          <td className="pr-10 pt-3">
                            <div className="flex align-items-center">
                              <div className="pr-5">
                                <img
                                  className="rounded-full h-12 w-12 object-cover"
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiBBYWvsdwacsZPX43FM7Eh5kIjQ-Y_hGXhg&usqp=CAU"
                                  alt="unsplash image"
                                />
                              </div>
                              <div className="ml-3">
                                <div className="">Test</div>
                                <div className="text-gray-500">types</div>
                              </div>
                            </div>
                          </td>
                          <td className="pl-10 pt-3">
                            <span className="bg-yellow-100 text-stone-800 rounded-md p-2">
                              {blog.test}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-8">
          <p className="mr-2 text-gray-500 dark:text-gray-400 whitespace-pre-wrap">
            {blog.description}
          </p>
        </div>
        <div className="p-4 sm:p-8">
          <div className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Comments
          </div>
          {!comment ? (
            <div>No Any Comments</div>
          ) : (
            <div className="flex flex-col space-y-4">
              {comment.map((comm) => (
                <div
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
                  key={comm._id}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      By: {comm.author !== "" ? comm.author : "Anonymous"}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {calculateDaysPassed(comm.timestamp)}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {comm.content}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 bg-slate-200 rounded-lg dark:bg-slate-600">
            <form onSubmit={handleFormSubmit}>
              <input
                className="w-full sm:w-11/12 md:w-[90%] h-10 mb-1 pr-5 pl-3 rounded-lg text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:bg-white dark:focus:bg-gray-800 focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Name (not required)"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
              <textarea
                className="block w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:bg-white dark:focus:bg-gray-800 focus:ring-2 focus:ring-blue-500"
                placeholder="Write your comment..."
                rows="4"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              ></textarea>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition duration-200 focus:outline-none focus:bg-blue-600"
                type="submit"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// import Upvote from "../Assets/yes.png";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import UserProfileTable from "./tablecom";

// const Base_url = "http://localhost:5000";

// export default function Write() {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null); // Initialize blog state as null
//   const [author, setAuthor] = useState("");
//   const [content, setContent] = useState("");
//   const [comment, setComment] = useState(null);
//   const [upvotes, setUpvotes] = useState(0); // Initialize upvotes state with 0
//   const [imageURL, setImageURL] = useState("");
// const handleUpvote = async () => {
//   try {
//     // Make a PUT request to update the upvotes count in the backend
//     const response = await fetch(`${Base_url}/blog/${id}`, {
//       method: "PUT",
//     });

//     if (response.ok) {
//       // If the request is successful, update the upvotes count in the frontend
//       setUpvotes((prevUpvotes) => prevUpvotes + 1);
//     } else {
//       console.error("Error updating upvotes`,erro");
//     }
//   } catch (error) {
//     console.error("Error updating upvotes:", error);
//   }
// };
// const calculateDaysPassed = (date) => {
//   const currentDate = new Date();
//   const pastDate = new Date(date);
//   const timeDifference = currentDate.getTime() - pastDate.getTime();
//   const daysPassed = Math.floor(timeDifference / (1000 * 3600 * 24));

//   if (daysPassed < 1) {
//     const hoursPassed = Math.floor(timeDifference / (1000 * 3600));
//     return hoursPassed + " hours";
//   }

//   return daysPassed + " days";
// };

// const handleFormSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await fetch(`${Base_url}/comments/${id}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         author,
//         content,
//       }),
//     });

//     if (response.ok) {
//       alert("Comment posted successfully");
//       setAuthor("");
//       setContent("");
//     } else {
//       alert("Failed to post comment");
//     }
//   } catch (error) {
//     console.error("Error posting comment:", error);
//   }
// };
// const fetchBlog = async () => {
//   try {
//     const response = await fetch(`http://localhost:5000/jobs/${id}`);
//     if (response.ok) {
//       const data = await response.json();
//       console.log(data);
//       setBlog(data);
//       setUpvotes(data.upvotes);
//     } else {
//       console.error("Error fetching blog:", response.statusText);
//     }
//   } catch (error) {
//     console.error("Error fetching blog:", error);
//   }
// };
// const fetchBlog = async () => {
//   try {
//     const response = await fetch(`${Base_url}/jobs/${id}`);
//     const data = await response.json();
//     console.log(data);
//     setBlog(data);
//     setUpvotes(data.upvotes);
//   } catch (error) {
//     console.error("Error fetching blog:", error);
//   }
// };
// const fetchComment = async () => {
//   try {
//     const response1 = await fetch(`${Base_url}/commentsget/${id}`);
//     const data1 = await response1.json();
//     console.log(data1);
//     setComment(data1);
//   } catch (error) {
//     console.error("Error fetching blog:", error);
//   }
// };
// useEffect(() => {
//   fetchBlog();
//   Assuming fetchComment is defined elsewhere
//   fetchComment();
// }, []);
// useEffect(() => {
//    fetchBlog();
//    fetchComment();
// const apiKey = "ce0f351aa7cdd5549933094195b10059";
// const apiUrl = `https://api.imgbun.com/png?key=${apiKey}&text=Ama&color=FF0000&size=40&background=FFFFFF`;

// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((data) => {
//     if (data.status === "OK") {
//       setImageURL(data.direct_link);
//     }
//   })
//   .catch((error) => {
//     console.error("Error fetching image:", error);
//   });

// Move your fetchBlog() and fetchComment() calls to the appropriate location

// }, []);
// console.log(blog);
// if (!blog) {
//   return <div>Blog not found</div>;
// }
// return (
//     <section className="py-24 lg:pt-20 lg:pb-32 bg-slate-100 dark:bg-slate-700 overflow-hidden">
//       <div className="write my-16 bg-slate-100 dark:bg-slate-700">
//         <div className="grid lg:grid-cols-2">
//           <div className="flex justify-center">
//             <img
//               className="singlePostImg w-[90%] sm:max-w-[400px] h-auto object-cover rounded-2xl mx-4 sm:mx-40 mb-5"
//               src={blog.link}
//               alt=""
//             />
//           </div>

//           <div className="p-4 sm:p-8">
//             <h1 className="text-2xl cursor-pointer group-hover:text-blue-400 font-semibold group-hover:underline dark:text-gray-100 text-center">
//               {blog.title}
//             </h1>
//             <div className="flex pl-1 text-gray-500 dark:text-gray-300 mt-3">
//               <span className="text-xs mr-2 text-gray-500 font-semibold dark:text-gray-400 italic">
//                 By: {blog.name}
//               </span>
//             </div>
//             <div className="flex my-3 text-gray-500 font-medium tracking-tight dark:text-gray-300">
//               <div className="flex flex-grow items-center">
//                 <img
//                   className="w-8 h-8 pb-2 cursor-pointer"
//                   src={Upvote}
//                   alt="Upvote"
//                   onClick={handleUpvote}
//                 />
//                 <span className="mr-4 text-red-500 font-semibold">
//                   {upvotes}
//                 </span>
//               </div>

//               <div className="flex-grow">
//                 <span className="mr-4">
//                   {new Date(blog.date).toLocaleString("default", {
//                     month: "long",
//                   })}{" "}
//                   {new Date(blog.date).getFullYear()}
//                 </span>
//               </div>

//               <div className="flex-grow">
//                 <span>Est.Time: {blog.time}</span>
//               </div>
//             </div>

//             <div className="flex my-3 text-gray-500 font-medium tracking-tight dark:text-gray-300">
//               <span className="text-gray-500 font-semibold text-xs dark:text-gray-400 italic">
//                 {blog.topic}
//               </span>
//             </div>
//             <div className="flex my-3 text-gray-500 font-medium tracking-tight dark:text-gray-300">
//               <span className="text-gray-500 font-semibold text-xs dark:text-gray-400 italic">
//                 {blog.updatedCategories &&
//                   blog.updatedCategories.map((category, index) => (
//                     <span key={index}>#{category} </span>
//                   ))}
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="p-4 sm:p-8">
//           <p className="mr-2 text-gray-500 dark:text-gray-400">
//             {blog.description}
//           </p>
//         </div>
//         <div className="p-4 sm:p-8">
//           <div className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
//             Comments
//           </div>
//           {!comment ? (
//             <div>No Any Comments</div>
//           ) : (
//             <div className="flex flex-col space-y-4">
//               {comment.map((comm) => (
//                 <div
//                   className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
//                   key={comm._id}
//                 >
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-xs font-medium text-gray-800 dark:text-gray-200 italic">
//                       By: {comm.author !== "" ? comm.author : "Anonymous"}
//                     </span>
//                     <span className="text-xs text-gray-500 dark:text-gray-400">
//                       {calculateDaysPassed(comm.timestamp)}
//                     </span>
//                   </div>
//                   <p className="text-gray-600 dark:text-gray-300"></p>
//                   {comm.content}
//                 </div>
//               ))}
//             </div>
//           )}

//           <div className="mt-8 bg-slate-200 rounded-lg dark:bg-slate-600">
//             <form onSubmit={handleFormSubmit}>
//               <input
//                 className="w-full sm:w-11/12 md:w-[70%] h-10 mb-1 pr-5 pl-3 rounded-lg text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:bg-white dark:focus:bg-gray-800 focus:ring-2 focus:ring-blue-500"
//                 type="text"
//                 placeholder="Name"
//                 value={author}
//                 onChange={(e) => setAuthor(e.target.value)}
//               />
//               <textarea
//                 className="block w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:bg-white dark:focus:bg-gray-800 focus:ring-2 focus:ring-blue-500"
//                 placeholder="Write your comment..."
//                 rows="4"
//                 value={content}
//                 onChange={(e) => setContent(e.target.value)}
//               ></textarea>
//               <button
//                 className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition duration-200 focus:outline-none focus:bg-blue-600"
//                 type="submit"
//               >
//                 Post Comment
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Upvote from "../Assets/yes.png";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import UserProfileTable from "./tablecom";

// const Base_url = "http://localhost:5000";

// export default function Write() {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null); // Initialize blog state as null
//   const [author, setAuthor] = useState("");
//   const [content, setContent] = useState("");
//   const [comment, setComment] = useState(null);
//   const [upvotes, setUpvotes] = useState(0); // Initialize upvotes state with 0
//   const [imageURL, setImageURL] = useState("");

//   const fetchBlog = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/jobs/${id}`);
//       if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//         setBlog(data);
//         setUpvotes(data.upvotes);
//       } else {
//         console.error("Error fetching blog:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error fetching blog:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBlog();
//     // Assuming fetchComment is defined elsewhere
//     // fetchComment();
//   }, []);

//   console.log(blog);
//   if (!blog) {
//     return <div>Blog not found</div>;
//   }
//   return (
//     <section className="py-24 lg:pt-20 lg:pb-32 bg-slate-100 dark:bg-slate-700 overflow-hidden">
//       <div className="write my-16 bg-slate-100 dark:bg-slate-700">
//         <div className="flex flex-col sm:flex-row">
//           <div className="sm:flex-1">
//             <div className="p-4 sm:p-8">
//               <h1 className="text-xl cursor-pointer group-hover:text-blue-400 font-semibold group-hover:underline dark:text-gray-100 text-center">
//                 Company Name {blog.name}
//               </h1>

//               <div className="grid grid-cols-1 sm:grid-cols-2 my-5">
//                 <div className="text-gray-500 font-medium tracking-tight dark:text-gray-300 text-center sm:text-left">
//                   <span className="text-xs mr-2 text-gray-500 font-semibold dark:text-gray-400 italic">
//                     Collage Name {blog.college}
//                   </span>
//                 </div>
//                 <div className="text-gray-500 font-medium tracking-tight dark:text-gray-300 text-center sm:text-right">
//                   <span className="mr-4">June 22, 2021 {blog.date}</span>
//                 </div>
//               </div>

//               <div className="flex w-full h-full justify-center my-3 text-gray-500 font-medium tracking-tight dark:text-gray-300">
//                 <img
//                   className="object-cover rounded-2xl mx-4 sm:mx-40 mb-5"
//                   style={{
//                     width: "80%", // Set the width as a percentage
//                     height: "80%", // Set the height as a percentage
//                     minWidth: "200px", // Set the minWidth
//                     minHeight: "150px", // Set the minHeight
//                   }}
//                   // src={imageURL}
//                   src={`http://avatar-g88m.onrender.com/generate-image?name=${blog.name}`}
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="sm:flex-1">
//             {/* Content for the right side */}
//             <div className="flex flex-col justify-center items-center my-5 sm:my-20 bg-slate-100 font-medium dark:text-gray-300 dark:bg-slate-700">
//               {/* <UserProfileTable /> */}
//               <div className="flex items-center justify-cente dark:bg-slate-700">
//                 <div className="flex justify-center">
//                   <div className="overflow-auto lg:overflow-visible">
//                     <table className="table bg-slate-100 border-separate text-sm w-full">
//                       <tbody>
//                         <tr className="dark:bg-gray-800">
//                           <td className="pr-10">
//                             <div className="flex align-items-center">
//                               <div className="pr-5">
//                                 <img
//                                   className="rounded-full h-12 w-12 object-cover"
//                                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFMpqq_OM11NtcunpZrwWflGLvuS8D7mwmA&usqp=CAU"
//                                   alt="unsplash image"
//                                 />
//                               </div>
//                               <div className="ml-3">
//                                 <div className="">Type</div>
//                                 <div className="text-gray-500">
//                                   (SDE, ML...)
//                                 </div>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="pl-10">
//                             <span className="bg-blue-200 text-stone-800 rounded-md p-2">
//                               SDE{blog.type}
//                             </span>
//                           </td>
//                         </tr>
//                         <tr className="dark:bg-gray-800">
//                           <td className="pr-10 pt-3">
//                             <div className="flex align-items-center">
//                               <div className="pr-5">
//                                 <img
//                                   className="rounded-full h-12 w-12 object-cover"
//                                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRg4QWhScG1fl5m7d0zJXQMyDq_c69-kNSiUGyziwJsCBcIzrEC5nbG-DCMUU8DhG2J70&usqp=CAU"
//                                   alt="unsplash image"
//                                 />
//                               </div>
//                               <div className="ml-3">
//                                 <div className="">CPI</div>
//                                 <div className="text-gray-500">Cutoff</div>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="pl-10 pt-3">
//                             <span className="bg-red-300 text-stone-800 rounded-md p-2">
//                               6.0 {blog.cpi}
//                             </span>
//                           </td>
//                         </tr>
//                         <tr className="dark:bg-gray-800">
//                           <td className="pr-10 pt-3">
//                             <div className="flex align-items-center">
//                               <div className="pr-5">
//                                 <img
//                                   className="rounded-full h-12 w-12 object-cover"
//                                   src="https://miro.medium.com/v2/resize:fit:1400/1*HUn4H_ieQDtWPV6V5kxrrg.jpeg"
//                                   alt="unsplash image"
//                                 />
//                               </div>
//                               <div className="ml-3">
//                                 <div className="">Branch</div>
//                                 <div className="text-gray-500">opens for</div>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="pl-10 pt-3">
//                             <span className="bg-red-100 text-stone-800 rounded-md p-2">
//                               Only Cs {blog.branch}
//                             </span>
//                           </td>
//                         </tr>
//                         <tr className="dark:bg-gray-800">
//                           <td className="pr-10 pt-3">
//                             <div className="flex align-items-center">
//                               <div className="pr-5">
//                                 <img
//                                   className="rounded-full h-12 w-12 object-cover"
//                                   src="https://www.mbaknol.com/wp-content/uploads/2013/07/Compensation-Meaning-Mbaknol.jpg.webp"
//                                   alt="unsplash image"
//                                 />
//                               </div>
//                               <div className="ml-3">
//                                 <div className="">Compensation</div>
//                                 <div className="text-gray-500">lakhs</div>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="pl-10 pt-3 sm:p-0">
//                             <span className="bg-green-300 text-stone-800 rounded-md p-2 mb-2 sm:mb-0">
//                               CTC: 16.0 {blog.ctc}
//                             </span>
//                             <br className="block sm:hidden" />{" "}
//                             {/* Line break on small screens */}
//                             <span className="bg-green-200 text-stone-800 rounded-md p-2 ml-0 mt-2 sm:ml-5 sm:mt-0">
//                               Gross: 14.0 {blog.gross}
//                             </span>
//                           </td>
//                         </tr>
//                         <tr className="dark:bg-gray-800">
//                           <td className="pr-10 pt-3">
//                             <div className="flex align-items-center">
//                               <div className="pr-5">
//                                 <img
//                                   className="rounded-full h-12 w-12 object-cover"
//                                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-GZaQMrJNqV-2uuXWoltDpr5tlFJsagIVQ&usqp=CAU"
//                                   alt="unsplash image"
//                                 />
//                               </div>
//                               <div className="ml-3">
//                                 <div className="">Interviews</div>
//                                 <div className="text-gray-500">Numbers</div>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="pl-10 pt-3">
//                             <span className="bg-orange-200 text-stone-800 rounded-md p-2">
//                               6+ {blog.interview}
//                             </span>
//                           </td>
//                         </tr>
//                         <tr className="dark:bg-gray-800">
//                           <td className="pr-10 pt-3">
//                             <div className="flex align-items-center">
//                               <div className="pr-5">
//                                 <img
//                                   className="rounded-full h-12 w-12 object-cover"
//                                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiBBYWvsdwacsZPX43FM7Eh5kIjQ-Y_hGXhg&usqp=CAU"
//                                   alt="unsplash image"
//                                 />
//                               </div>
//                               <div className="ml-3">
//                                 <div className="">Test</div>
//                                 <div className="text-gray-500">types</div>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="pl-10 pt-3">
//                             <span className="bg-yellow-100 text-stone-800 rounded-md p-2">
//                               Hello {blog.test}
//                             </span>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex my-6 text-gray-500 font-medium tracking-tight dark:text-gray-300">
//                 <img className="w-8 h-8 pb-2" src={Upvote} alt="" />
//                 <span className="mr-4 text-red-500 font-semibold">1</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="p-4 sm:p-8">
//           <p className="mr-2 text-gray-500 dark:text-gray-400">
//             {blog.description}
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
//             quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
//             Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
//             eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
//             error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
//             impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
//             odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//             elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//             iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
//             voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur
//             adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus
//             eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae,
//             adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet
//             consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem
//             doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus
//             eum beatae, adipisci voluptas a odit modi eos!
//           </p>
//         </div>
//         <div className="p-4 sm:p-8">
//           <div className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
//             Comments
//           </div>
//           <div className="flex flex-col space-y-4">
//             <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
//                   John Doe
//                 </span>
//                 <span className="text-xs text-gray-500 dark:text-gray-400">
//                   3 hours ago
//                 </span>
//               </div>
//               <p className="text-gray-600 dark:text-gray-300">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
//                 egestas at nibh nec iaculis.
//               </p>
//             </div>

//             <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
//                   Jane Smith
//                 </span>
//                 <span className="text-xs text-gray-500 dark:text-gray-400">
//                   1 day ago
//                 </span>
//               </div>
//               <p className="text-gray-600 dark:text-gray-300">
//                 Ut venenatis dui arcu, a efficitur ex maximus sed. Suspendisse
//                 eget leo nisi.
//               </p>
//             </div>
//           </div>

//           <div className="mt-8">
//             <form>
//               <textarea
//                 className="block w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:bg-white dark:focus:bg-gray-800 focus:ring-2 focus:ring-blue-500"
//                 placeholder="Write your comment..."
//                 rows="4"
//               ></textarea>
//               <button
//                 className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition duration-200 focus:outline-none focus:bg-blue-600"
//                 type="submit"
//               >
//                 Post Comment
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
