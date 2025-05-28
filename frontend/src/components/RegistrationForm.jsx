import React from "react";
import { Link } from "react-router-dom";
const RegistrationForm = () => {
  return (
    <form className="w-[20rem]">
      <h1 className="text-3xl font-semibold mb-4">👤Create Your Account </h1>
      <div className="mb-4">
        <label htmlFor="email" className="font-semibold text-lg">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border block w-full p-2 rounded-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="pwd" className="font-semibold text-lg">
          Password
        </label>
        <input
          type="password"
          name="pwd"
          id="pwd"
          className="border block w-full p-2 rounded-sm"
        />
      </div>
      <button className="flex justify-center items-center w-full bg-yellow-500 p-3 rounded-sm font-semibold">
        Login
      </button>
      <p className="text-sm mt-4">
        Already have an account?
        <Link to="/auth/login" className="ml-1 text-blue-600">
          Login to your account
        </Link>
      </p>
    </form>
  );
};

export default RegistrationForm;
