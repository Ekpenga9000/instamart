import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaTag, FaTags } from "react-icons/fa6";

const CreatePost = () => {
  const [file, setFile] = useState();
  const [caption, setCaption] = useState("");
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("caption", caption);

    try {
      await axios.post("http://localhost:4000/api/v1/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFeedback("Post created");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.log(error);
      setFeedback(
        "There was an error posting your image. You'll fix it, don't worry."
      );
    }
  };

  const fileSeleted = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    // <section className="flex justify-center">
    //   <div>
    //     <h1 className="mt-4 font-semibold">Create Post</h1>

    //     <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
    //       <div>
    //         <label className="text-gray-700" htmlFor="imageName">
    //           Image
    //         </label>
    //         <input
    //           type="file"
    //           onChange={fileSeleted}
    //           //   name="imageName"
    //           id="imageName"
    //           accept="image/*"
    //         />
    //       </div>
    //       <div>
    //         <label className="text-gray-700" htmlFor="caption">
    //          Title
    //         </label>
    //         <input
    //           type="text"
    //           name="caption"
    //           id="caption"
    //           value={caption}
    //           onChange={(e) => setCaption(e.target.value)}
    //           placeholder="Caption"
    //           className="block w-full border p-2"
    //         />
    //       </div>
    //       <div className="flex justify-end">
    //         <button className="bg-blue-500 text-white px-4 py-2 rounded">
    //           Post
    //         </button>
    //       </div>
    //     </form>
    //     <p className="mt-4">{feedback}</p>
    //   </div>
    // </section>

    <div className="col-span-1 p-4">
      <h1 className="font-semibold text-2xl mb-5">Create new listing</h1>

      <ul>
        <li className="flex items-center gap-2 cursor-pointer mb-4 text-blue-700">
          <span className="bg-gray-200 inline-block p-2 rounded-full">
            <FaTag />
          </span>
          <span>Choose listing type</span>
        </li>

        <li className="hover:text-blue-700">
          <Link to={"/"} className="flex items-center gap-2">
            <span className="bg-gray-200 inline-block p-2 rounded-full">
              <FaTags />
            </span>
            Your Listings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CreatePost;
