import React from "react";

export default function ErrorPage() {
  return (
    <div className="bg-gray-50 font-sans min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 md:p-12 rounded-2xl shadow-xl text-center border border-gray-100">
        <div className="mb-6">
          <h1 className="text-9xl font-extrabold text-indigo-600 opacity-80 select-none">
            404
          </h1>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mb-8 leading-relaxed">
          It looks like the page you were looking for decided to go on a little
          adventure. Don't worry, we can get you back on track!
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 shadow-lg 
                     transition duration-300 ease-in-out hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-xl 
                     focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50"
        >
          Go Back Home
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </a>

        <div className="mt-8 text-sm text-gray-400">
          If you believe this is an error, please try clearing your browser
          cache or contact support.
        </div>
      </div>
    </div>
  );
}
