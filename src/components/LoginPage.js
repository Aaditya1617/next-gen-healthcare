import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div>
    <NavBar></NavBar>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-800  to-pink-200 font-mono">
      <div className="space-y-6 mt-[-50px] w-full max-w-xs mx-auto">
        <button
          className="bg-gray-800 text-white font-bold py-2 px-4 rounded w-full transition duration-300 ease-in-out transform hover:scale-110 hover:bg-rose-600"
          onClick={() => {
            navigate("/doctor_login");
          }}
        >
          Doctor Login
        </button>
        <button
          className="bg-gray-800 text-white font-bold py-2 px-4 rounded w-full transition duration-300 ease-in-out transform hover:scale-110 hover:bg-rose-600"
          onClick={() => {
            navigate("/patient_login");
          }}
        >
          Patient Login
          </button>
        <button
          className="bg-gray-800 text-white font-bold py-2 px-4 rounded w-full transition duration-300 ease-in-out transform hover:scale-110 hover:bg-rose-600"
          onClick={() => {
            navigate("/diagnostic_login");
          }}
        >
          Diagnostic Login
        </button>
      </div>
      </div>
      </div>
  );
};

export default LoginPage;
