import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="w-[20rem]">
      <h1 className="text-4xl font-semibold mb-4">🔒Login </h1>
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
        Don't have an account?
        <Link to="/auth/register" className="ml-1 text-blue-600">
          Create an Account
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
