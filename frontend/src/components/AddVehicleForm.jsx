import React from 'react'
import { MdAddAPhoto } from "react-icons/md";
import FormInfoTop from './FormInfoTop';
import AddingPhotoForm from './AddingPhotoForm';
function AddVehicleForm() {
  return (
      <>
          
          <FormInfoTop title={"New Vehicle Listing"}/>

          <form>
              <select name="" id="" className="w-full border rounded-[.25rem] p-4 mb-4">
                  <option value="">Vehicle type</option>
                  </select>
                <AddingPhotoForm/>
              <section>
                <h3 className="font-semibold">About this vehicle</h3>
                <p className="text-gray-500 text-sm">Help buyers know more about the vehicle that you're listing.</p>
    
                <select name="" id="" className="w-full border rounded-[.25rem] p-4 mb-4">
                  <option value="">Year</option>
                </select>
                <input type="text" placeholder="Make" className="w-full border rounded-[.25rem] p-4 mb-4"/>
                <input type="text" placeholder="Model" className="w-full border rounded-[.25rem] p-4 mb-4" />
                <input type="text" placeholder="Price" className="w-full border rounded-[.25rem] p-4 mb-4"/>
                
                  <label htmlFor="" className='font-semibold'>Description</label>
                  <p className='text-gray-500 text-sm'>
                      Tell buyers anything that you haven't had the chance to include yet about your vehicle.
                  </p>
                  <textarea name="" id="" placeholder="Description" className="resize-none w-full h-[10rem] p-4 border rounded-[.25rem]"></textarea>
                  <button className="p-2 w-full justify-center items-center border bg-sky-950 text-white">Sell</button>
              </section>
           
            </form>
        </>
  )
}

export default AddVehicleForm