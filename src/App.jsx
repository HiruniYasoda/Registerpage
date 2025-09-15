import React from 'react';
import { ArrowLeft, LogIn, UserPlus } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-600 flex justify-center items-center p-4 font-inter text-white">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto relative">
        {/* Go Back Button Section */}
        <div
          className="flex-shrink-0 mr-2 self-start hidden lg:block"
          style={{ marginTop: '0rem' }}
        >
          <button className="bg-neutral-500 text-white py-2 px-6 rounded-full shadow-lg flex bg-opacity-90 hover:bg-neutral-500 transition-colors duration-300">
            <ArrowLeft className="h-5 w-5 mr-2" /> Go Back
          </button>
        </div>

        {/* Form and Image Container */}
        <div className="flex justify-center w-full max-w-5xl mx-auto relative">
          {/* Form Section */}
          <div className="relative p-10 w-full lg:w-1/2 flex flex-col justify-center bg-neutral-500 bg-opacity-90 backdrop-blur-md rounded-3xl border-r-4 border-neutral-400 z-10">
            <h1 className="text-white text-2xl font-bold text-center mb-4">
              Create an Account
            </h1>

            <div className="space-y-3 mb-4">
              <div>
                <label className="text-white font-semibold text-base font-sans">
                  User Name :
                </label>
                <input
                  type="text"
                  placeholder="Enter User name here"
                  className="w-full mt-1 p-2 text-sm rounded-lg bg-neutral-400 text-white placeholder-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                />
              </div>

              <div>
                <label className="text-white font-semibold text-base font-sans">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="Enter email here"
                  className="w-full mt-1 p-2 text-sm rounded-lg bg-neutral-400 text-white placeholder-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                />
              </div>

              <div>
                <label className="text-white font-semibold text-base font-sans">
                  Password :
                </label>
                <input
                  type="password"
                  placeholder="Enter password here"
                  className="w-full mt-1 p-2 text-sm rounded-lg bg-neutral-400 text-white placeholder-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                />
              </div>

              <div>
                <label className="text-white font-semibold text-base font-sans">
                  Confirm Password :
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full mt-1 p-2 text-sm rounded-lg bg-neutral-400 text-white placeholder-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                />
              </div>
            </div>

            <button className="w-2/3 mx-auto bg-neutral-400 text-white p-2 rounded-lg font-extrabold text-sm hover:bg-neutral-600 transition duration-300 shadow-md bg-opacity-70 flex items-center justify-center">
              <UserPlus className="w-4 h-4 mr-2" /> Register
            </button>

            <div className="flex items-center my-3">
              <hr className="flex-grow border-neutral-300" />
              <hr className="flex-grow border-neutral-300" />
            </div>

            <p className="text-left text-neutral-300 text-sm font-bold mt-4">
              If you have an account
            </p>

            <br></br>

            <button className="w-2/3 mx-auto bg-transparent border border-neutral-300 text-white py-1.5 rounded-lg font-bold text-lg hover:bg-neutral-600 transition-colors duration-300 shadow-md flex items-center justify-center" style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)' }}>
              <LogIn className="w-5 h-5 mr-2" /> Login
            </button>

            <p className="text-center text-neutral-300 text-sm font-bold mt-4">
              Your journey to learning starts here.
            </p>
          </div>

          {/* Image Section - Overlapping on border */}
          <div className="hidden lg:block absolute top-0 bottom-0 right-0 flex items-center z-20">
            <img
              src="image1.png"
              alt="Cartoon character holding a book"
              className="h-full object-contain pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;