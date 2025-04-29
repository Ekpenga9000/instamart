import React from "react";
import { Link, useLocation } from "react-router-dom";
import ListingTypes from "../components/ListingTypes";
import CreatePost from "../components/CreatePostList";
import PostItemForm from "../components/PostItemForm";
import AddVehicleForm from "../components/AddVehicleForm";
import AddPropertyForm from "../components/AddPropertyForm";
import AddServicesForm from "../components/AddServicesForm";
import { AiOutlineClose } from "react-icons/ai";

const CreateListing = () => {
    const location = useLocation();
    const { pathname } = location;

  return (
    <section className="grid grid-cols-4">
      <div className="col-span-1 p-4 border-r shadow-sm">
        { pathname !== "/create" && <div>
          <Link to={"/create"} className="p-2 inline-block bg-gray-200 border rounded-full hover:bg-gray-400"><AiOutlineClose /></Link>
        </div>}
        {pathname === "/create" && <CreatePost />}
        {pathname === "/create/item" && <PostItemForm />}
        {pathname === "/create/vehicle" && <AddVehicleForm />}
        {pathname === "/create/rental" && <AddPropertyForm />}
        {pathname === "/create/service" && <AddServicesForm/>}
        
      </div>
      <div className="bg-gray-200 col-span-3 h-screen">
        {pathname === "/create" && <ListingTypes />}
      </div>
    </section>
  );
};

export default CreateListing;
