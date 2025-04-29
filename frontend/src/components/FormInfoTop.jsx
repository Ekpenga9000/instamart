import React from 'react';
import { IoMdGlobe } from "react-icons/io";
import { FaUser } from "react-icons/fa";


const FormInfoTop = ({title}) => {
  return (
      <section>
          <h2 className="text-2xl font-semibold mb-4">{ title }</h2>
              
    
              <ul className="flex items-center gap-4 mb-4">
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
             
    </section>
  )
}

export default FormInfoTop