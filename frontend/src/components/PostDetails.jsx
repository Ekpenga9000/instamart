import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaMapPin, FaMessage, FaShare, FaHeart } from "react-icons/fa6";
import { MdOutlineMoreHoriz } from "react-icons/md";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPost = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/posts/${id}`
      );
      setPost(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    try {
      fetchPost();
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [id]);
  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center p-4">{error}</div>;

  return (
    <section className="grid grid-cols-3">
      <div className="col-span-2 h-[80vh] p-4 bg-black flex justify-center">
        <img
          src={post.url}
          alt={post.caption}
          className="w-[92%] h-full object-contain object-center"
        />
      </div>
      <div className="col-span-1 p-4">
        <h1 className="text-2xl font-bold">{post.caption}</h1>
        <ul className="mb-4">
          <li className="text-lg">$ 2,000</li>
          <li className="text-sm text-gray-700">
            Listing created on {post.createdAt}
          </li>
          <li className="text-sm text-gray-700 flex items-center gap-1">
            <FaMapPin /> Lethbridge, AB
          </li>
        </ul>

        <ul className="flex items-center gap-6">
          <li>
            <button className="details_btn first:py-1 first:gap-1">
              <FaMessage />
              Message
            </button>
          </li>
          <li>
            <button className="details_btn">
              <FaHeart />
            </button>
          </li>
          <li>
            <button className="details_btn">
              <FaShare />
            </button>
          </li>
          <li>
            <button className="details_btn">
              <MdOutlineMoreHoriz />
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PostDetails;
