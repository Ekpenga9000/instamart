import React from "react";
import { MdAddAPhoto } from "react-icons/md";
const AddingPhotoForm = () => {
  return (
    <div>
      <p className="font-semibold text-sm text-gray-600 mb-1">Photos</p>
      <div className="border-2 p-4 flex flex-col items-center cursor-pointer mb-4">
        <span className="bg-gray-200 h-[2rem] w-[2rem] flex justify-center items-center rounded-full">
          <MdAddAPhoto />
        </span>
        <span className="font-semibold">Add Photos</span>
      </div>
    </div>
  );
};

export default AddingPhotoForm;
