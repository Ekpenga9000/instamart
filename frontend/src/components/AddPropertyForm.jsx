import React from "react";
import FormInfoTop from "./FormInfoTop";
import AddingPhotoForm from "./AddingPhotoForm";

const AddPropertyForm = () => {
  return (
    <>
      <FormInfoTop title={"New Property Listing"} />
      <form>
        <div className="">
          <AddingPhotoForm />
          <section>
            <select
              name=""
              id=""
              className="w-full border rounded-[.25rem] p-4 mb-4">
              <option value="">Listing for Sale or Rent</option>
            </select>
            <select
              name=""
              id=""
              className="w-full border rounded-[.25rem] p-4 mb-4">
              <option value="">Property type</option>
            </select>

            <input
              type="text"
              placeholder="Number of bedrooms"
              className="w-full border rounded-[.25rem] p-4 mb-4"
            />
            <input
              type="text"
              placeholder="Number of bathrooms"
              className="w-full border rounded-[.25rem] p-4 mb-4"
            />
            <input
              type="text"
              placeholder="Price"
              className="w-full border rounded-[.25rem] p-4 mb-4"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full border rounded-[.25rem] p-4 mb-4"
            />
            <textarea
              name=""
              id=""
              placeholder="Description"
              className="resize-none w-full h-[10rem] p-4 border rounded-[.25rem]"></textarea>
            <p className="text-xs mb-4">
              Include details such as utilities, amenities, any deposits needed
              and when it's available.
            </p>
            <hr />
            <ul className="flex justify-between items-center mt-4">
              <li className="font-semibold">More details</li>
              <li className="text-gray-500">Optional</li>
            </ul>
            <input
              type="text"
              placeholder="Square feet"
              className="w-full border rounded-[.25rem] p-4 mb-4"
            />
            <select
              name=""
              id=""
              className="w-full border rounded-[.25rem] p-4 mb-4">
              <option value="">Washer/Dryer</option>
            </select>
            <select
              name=""
              id=""
              className="w-full border rounded-[.25rem] p-4 mb-4">
              <option value="">Parking</option>
            </select>
            <select
              name=""
              id=""
              className="w-full border rounded-[.25rem] p-4 mb-4">
              <option value="">Air Conditioning</option>
            </select>
            <select
              name=""
              id=""
              className="w-full border rounded-[.25rem] p-4 mb-4">
              <option value="">Heating</option>
            </select>
            <button className="p-2 w-full justify-center items-center border bg-sky-950 text-white">
              Sell
            </button>
          </section>
        </div>
      </form>
    </>
  );
};

export default AddPropertyForm;
