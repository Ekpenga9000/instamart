import React from 'react'
import { MdAddAPhoto } from "react-icons/md";
import FormInfoTop from './FormInfoTop';
import AddingPhotoForm from './AddingPhotoForm';
const PostItemForm = () => {
    return (
      <>
      <FormInfoTop title={"New Item for Sale"}/>
    <form>
         
          <div className="">

          <AddingPhotoForm/>
         
          <section>
            <h3 className="font-semibold">Required</h3>
            <p className="text-gray-700">Be as descriptive as possible</p>

            <input type="text" placeholder="Title" className="w-full border rounded-[.25rem] p-4 mb-4"/>
            <input type="text" placeholder="Price" className="w-full border rounded-[.25rem] p-4 mb-4"/>
            <select name="" id="" className="w-full border rounded-[.25rem] p-4 mb-4">
              <option value="">Category</option>
            </select>
            <select name="" id="" className="w-full border rounded-[.25rem] p-4 mb-4">
              <option value="">Condition</option>
            </select>
              <textarea name="" id="" placeholder="Description" className="resize-none w-full h-[10rem] p-4 border rounded-[.25rem]"></textarea>
              <button className="p-2 w-full justify-center items-center border bg-sky-950 text-white">Sell</button>
          </section>
          </div>
        </form>
      </>
  )
}

export default PostItemForm