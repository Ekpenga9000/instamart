import React from "react";
import { Link } from "react-router-dom";
import { FaOpencart, FaShop, FaPlus, FaUser, FaLock } from "react-icons/fa6";
import useUser from "../hooks/useUser";

function Navbar() {
  const user = useUser();
  return (
    <header>
      <nav className="bg-sky-950 text-white flex items-center justify-between p-4">
        <Link
          to={"/"}
          className="text-xl flex items-center gap-1 font-semibold">
          InstaMart
          <FaOpencart />
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/" className="nav_link">
              <FaShop />
              Marketplace
            </Link>
          </li>
          <li>
            <Link to="/create" className="nav_link">
              {" "}
              <FaPlus />
              Sell product
            </Link>
          </li>
        </ul>
        {!user ? (
          <Link to={"/auth/login"} className="nav_link">
            <FaLock />
            Login
          </Link>
        ) : (
          <Link to={"/profile"} className="nav_link">
            <FaUser />
            {user.fullname}
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
