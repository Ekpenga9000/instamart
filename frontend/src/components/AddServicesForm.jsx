import React from "react";
import FormInfoTop from "./FormInfoTop";
import AddingPhotoForm from "./AddingPhotoForm";

const AddServicesForm = () => {
  return (
    <>
      <FormInfoTop title={"List your Service"} />
      <p className="text-gray-500">
        Optional: Please show some sample of your work
      </p>
      <AddingPhotoForm />
      <input
        type="text"
        placeholder="Title"
        className="w-full border rounded-[.25rem] p-4 mb-4"
      />
      <textarea
        name=""
        id=""
        placeholder="Description"
        className="resize-none w-full h-[10rem] p-4 border rounded-[.25rem]"></textarea>
      <p className="text-xs mb-4">Be as descriptive as possible.</p>
      <input
        type="text"
        placeholder="Price"
        className="w-full border rounded-[.25rem] p-4 mb-4"
      />
      <select name="" id="" className="w-full border rounded-[.25rem] p-4 mb-4">
        <option value="">Pricing Type</option>
      </select>
      <button className="p-2 w-full justify-center items-center border bg-sky-950 text-white">
        Sell
      </button>
    </>
  );
};

export default AddServicesForm;
