import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "./firebase"; // Assuming you have imported Firebase correctly
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import Log from "./vhgb copy.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",

    password: "",
    confirmPassword: "",
  });

  const [currentUser, setCurrentUser] = useState(null);
  const [notice, setNotice] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, name } = formData;

    if (password !== confirmPassword) {
      setNotice("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await sendEmailVerification(userCredential.user);

      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      setCurrentUser(true);
    } catch (error) {
      setNotice(error.message);
    }
  };

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-full bg-gradient-to-tl from-blue-50 to-blue-700 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <img src={Log} className="h-16 mr-3 rounded-full" alt="Flowbite Logo" />
        <p className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          PlaceWise
        </p>
        <div className="bg-white shadow rounded-3xl lg:w-1/3 md:w-1/2 w-full p-10 mt-6">
          <p
            tabIndex={0}
            role="heading"
            aria-label="Register your account"
            className="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Register your account
          </p>
          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Name
              </label>
              <input
                aria-label="enter name"
                role="input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="required:border-red-500 bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Email
              </label>
              <input
                aria-label="enter email address"
                role="input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                required
              />
            </div>

            <div className="relative">
              <label className="text-sm font-medium leading-none text-gray-800">
                Password
              </label>
              <input
                placeholder="••••••••"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                required=""
                id="exampleInputPassword1"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute top-3/4 right-3 transform -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400 dark:text-white cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.293 6.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L12 10.586l5.293-5.293a1 1 0 011.414 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400 dark:text-white cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.6 16.6a8 8 0 10-11.2-11.2"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Re-enter Password
              </label>
              <input
                aria-label="re-enter password"
                role="input"
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                required
              />
            </div>
            {notice && <div className="text-red-500 mt-2">{notice}</div>}
            <div className="mt-6 w-full">
              <button
                role="button"
                aria-label="create my account"
                type="submit"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Send Email For Verification
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// <div>
//   <h2>Sign Up</h2>
//   <form onSubmit={handleSubmit}>
//     <div>
//       <label htmlFor="email">Email</label>
//       <input type="email" name="email" id="email" required />
//     </div>
//     <div>
//       <label htmlFor="password">Password</label>
//       <input type="text" name="password" id="password" required />
//     </div>
//     <button type="submit">Sign Up</button>
//   </form>
// </div>
