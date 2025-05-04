import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import useUser from "../hooks/useUser";

const Authentication = () => {
  // If user is logged in redirect to marketplace.
  // If location is /login than display login
  // If location is /register then display registration
  const user = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  if (user) {
    navigate("/profile");
  }

  return (
    <section className="flex items-center justify-center h-[70vh]">
      <div className="">
        {location.pathname === "/auth/login" && <LoginForm />}
        {location.pathname === "/auth/register" && <RegistrationForm />}
      </div>
    </section>
  );
};

export default Authentication;
