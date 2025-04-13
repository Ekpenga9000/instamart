import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaMapPin, FaMessage, FaShare, FaHeart } from "react-icons/fa6";
import { MdOutlineMoreHoriz } from "react-icons/md";
import broken from "../assets/borken.png";

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

        <ul className="flex items-center gap-6 mb-4">
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

        <h3 className="font-semibold text-lg mb-4">Details</h3>
        <ul className="flex item-center gap-3 mb-3">
          <li className="font-semibold">Condition: </li>
          <li>{post.condition || "Unknown"}</li>
        </ul>
        <p>
          Experience classic gaming with this used Xbox 360 console, fully
          tested and in great working condition. Whether you're revisiting
          nostalgic favorites or introducing someone to timeless Xbox titles,
          this console delivers smooth gameplay and entertainment value at a
          great price.
        </p>
        <div className="border-t-2 mt-4 pt-3">
          <h3 className="font-semibold text-lg mb-4">Seller's Information</h3>
          <ul className="flex items-center gap-4">
            <li>
              <img
                src={broken}
                alt="Aina Zalati"
                className="h-[3rem] w-[3rem] object-cover rounded-full"
              />
            </li>
            <li>
              <ul>
                <li>
                  <h4 className="font-bold">Aina Zalati</h4>
                  <span>Reviews</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
