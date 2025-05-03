import React from "react";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { FaInfo, FaTags } from "react-icons/fa6";
import { FaInbox, FaRegBookmark, FaReceipt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

const Profile = () => {
  return (
    <section className="p-4 grid grid-cols-4">
      <div className="col-span-1">
        <ul className="text-lg flex flex-col gap-2 border h-screen p-4">
          <li className="profile_link">
            <FaTags />
            Your Listings
          </li>
          <li className="profile_link">
            <FaReceipt />
            Purchase History
          </li>
          <li className="profile_link">
            <FaRegBookmark />
            Saved Items
          </li>
          <li className="profile_link">
            <FaInbox />
            Inbox
          </li>
          <li className="profile_link">
            <IoSettingsOutline />
            Profile Settings
          </li>
          <li className="profile_link">
            <FaInfo />
            Help
          </li>
          <li className="profile_link">
            <MdLogout />
            Logout
          </li>
        </ul>
      </div>
      <div className="col-span-4"></div>
    </section>
  );
};

export default Profile;
