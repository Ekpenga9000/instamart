import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const HomePage = () => {
  const [data, setData] = useState([]);

  const fetchPost = async () => {
    try {
      const posts = await axios.get("http://localhost:4000/api/v1/posts");
      setData(posts.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <section className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-1 border rounded-[0.25rem] p-2">
        <div className="mb-4">
          <h1 className="font-bold text-2xl mb-2">Marketplace</h1>
          <div className="flex items-center gap-1 border-2 rounded-[0.25rem] p-2 bg-slate-50">
            <FaSearch />
            <input
              type="text"
              placeholder="Search InstaMart"
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>
        <ul>
          <li>
            <Link to="/vehicles">Vehicles</Link>
          </li>
          <li>
            <Link to="/vehicles">Properties to rent</Link>
          </li>
          <li>
            <Link to="/vehicles">Properties for sale</Link>
          </li>
          <li>
            <Link to="/vehicles">Classifieds</Link>
          </li>
          <li>
            <Link to="/vehicles">Clothing</Link>
          </li>
          <li>
            <Link to="/vehicles">Electronics</Link>
          </li>
          <li>
            <Link to="/vehicles">Entertainment</Link>
          </li>
          <li>
            <Link to="/vehicles">Family</Link>
          </li>
          <li>
            <Link to="/vehicles">Garden and Outdoors</Link>
          </li>
          <li>
            <Link to="/vehicles">Hobbies</Link>
          </li>
          <li>
            <Link to="/vehicles">Home improvement</Link>
          </li>
          <li>
            <Link to="/vehicles">Musical Supplies</Link>
          </li>
          <li>
            <Link to="/vehicles">Office Supplies</Link>
          </li>
          <li>
            <Link to="/vehicles">Pet Supplies</Link>
          </li>
          <li>
            <Link to="/vehicles">Sporting Supplies</Link>
          </li>
          <li>
            <Link to="/vehicles">Toys and Games</Link>
          </li>
        </ul>
      </div>
      <div className="border col-span-3">
        <h2 className="font-semibold text-center"> Today's Picks</h2>
        {!data.length ? (
          <p>No Posts yet.</p>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {data.map((post) => {
              return (
                <Post
                  key={post._id}
                  caption={post.caption}
                  imageName={post.imageName}
                  url={post.url}
                  id={post._id}
                  fetchPost={fetchPost}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePage;
