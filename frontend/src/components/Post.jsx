import React from "react";
import { IoTrashOutline } from "react-icons/io5";
import { FaRegComment, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";

const Post = ({ caption, imageName, url, id, fetchPost }) => {
    const handleDelete = async() => {
        try {
            console.log("Firing!!!");
            await axios.delete(`http://localhost:4000/api/v1/posts/${id}`); 
            fetchPost();
        } catch (error) {
            console.log(error);
        }
    }
  return (
    // <Link to={`/post/${id}`} key={id} className="border block rounded-md w-full h-[30rem] md:h-[40rem] md:w-[30rem] my-8">
    <Link to={`/post/${id}`} key={id} className="border">
      <div className="w-full h-[20rem] bg-black">
        <img src={url} alt={imageName} className="h-full w-full object-contain"/>
      </div>
          <div className="p-4 bg-sky-950 h-[20%]">
              <ul className="flex items-center gap-6 mb-4 text-white">
                  <li className="cursor-pointer"><FaRegHeart /></li>
                  <li className="cursor-pointer"><FaRegComment /></li>
                  <li className="cursor-pointer" onClick={handleDelete}><IoTrashOutline /></li>
              </ul>
              <p className="text-white ">Caption: {caption}</p>
      </div>
    </Link>
  );
};

export default Post;
