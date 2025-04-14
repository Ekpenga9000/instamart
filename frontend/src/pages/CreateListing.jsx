import React from "react";
import { Link, useLocation } from "react-router-dom";
import ListingTypes from "../components/ListingTypes";
import CreatePost from "../components/CreatePostList";
import { IoMdGlobe } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const CreateListing = () => {
    const location = useLocation();
    const { pathname } = location;

  return (
    <section className="grid grid-cols-4">
      <div className="col-span-1 p-4 border-r shadow-sm">
        {pathname === "/create" && <CreatePost />}
              
        <div>
          <h2 className="text-2xl font-semibold mb-4">Item for sale</h2>
          <ul className="flex items-center gap-4">
            <li className="bg-gray-200 h-[3rem] w-[3rem] flex justify-center items-center rounded-full">
               <FaUser/>
            </li>
            <li>
              <ul>
                <li className="font-semibold">
                  Sample User
                </li>
                <li className="flex text-xs items-center gap-1 text-gray-700">
                 
                  Creating listing to instaMart
                  <span>
                    .
                  </span>
                  <span className="flex items-center gap-1">
                  <IoMdGlobe /> Lethbridge
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-200 col-span-3 h-screen">
        {pathname === "/create" && <ListingTypes />}
      </div>
    </section>
  );
};

export default CreateListing;
