import React from "react";
import { Link, useLocation } from "react-router-dom";
import ListingTypes from "../components/ListingTypes";
import CreatePost from "../components/CreatePostList";

const CreateListing = () => {
    const location = useLocation();
    const { pathname } = location;

  return (
    <section className="grid grid-cols-4">
      <div className="col-span-1 p-4 border-r shadow-sm">
              {pathname === "/create" && <CreatePost />}
              
              <div>
                  <h2>Item for sale</h2>
              </div>
      </div>
      <div className="bg-gray-200 col-span-3 h-screen">
        {pathname === "/create" && <ListingTypes />}
      </div>
    </section>
  );
};

export default CreateListing;
