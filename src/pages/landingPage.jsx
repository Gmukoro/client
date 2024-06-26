import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Inspiring from "../assets/inspiration.jpg";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-blue-100">
      <Header />
      <div className="flex flex-grow items-center justify-center bg-blue">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl p-8">
          <div className="flex flex-col md:w-1/2 mb-8 md:mb-0">
            <p className="text-xl text-blue-600 mb-2 font-bold">
              "Get and stay inspired every moment of the day with{" "}
              <span className="text-white">Spire.</span>"
            </p>
            <div
              className="h-64 md:h-96 w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${Inspiring})`,
              }}
            ></div>
          </div>
          <div className="md:w-1/2 md:pl-12 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Sign up to{" "}
              <Link to="/register" style={{ textDecoration: "none" }}>
                <span className="text-blue-600 cursor-pointer">Spire</span>
              </Link>
            </h1>

            <div className="space-y-4">
              <Link
                to="/register"
                className="block w-full md:w-auto bg-blue-600 text-white font-bold py-3 bg-opacity-200 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Create Account
              </Link>
              <Link
                to="/login"
                className="block w-full md:w-auto bg-white bg-opacity-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-white hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
