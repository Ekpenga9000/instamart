import React from "react";
import { Link } from "react-router-dom";
import { FaCarOn, FaHouseChimney, FaScrewdriverWrench } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
const ListingTypes = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <h2 className="text-lg font-semibold ml-[12rem] mb-4">
        {" "}
        Choose listing type
      </h2>
      <ul className="grid grid-cols-6 justify-center gap-6">
        <li className="col-span-1"></li>
        <li>
          <Link to={"/create/item"} className="create-product-card">
            <div className="create-img-div">
              <GiClothes className="text-[2.5rem]" />
            </div>
            <h3>Item for sale</h3>
            <p>Create a listing for the item you want to sell.</p>
          </Link>
        </li>
        <li>
          <Link to="/create/vehicle" className="create-product-card">
            <div className="create-img-div">
              <FaCarOn className="text-[2.5rem]" />
            </div>
            <h3>Vehicle for sale</h3>
            <p>Create a listing for the vehicle you want to sell.</p>
          </Link>
        </li>
        <li>
          <Link to="/create/service" className="create-product-card">
            <div className="create-img-div">
              <FaScrewdriverWrench className="text-[2.5rem]" />
            </div>
            <h3>Service</h3>
            <p>Offer a service to customers.</p>
          </Link>
        </li>
        <li>
          <Link to="/create/rental" className="create-product-card">
            <div className="create-img-div">
              <FaHouseChimney className="text-[2.5rem]" />
            </div>
            <h3>Property for sale or rent</h3>
            <p>List a house or flat for sale or rent.</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ListingTypes;
