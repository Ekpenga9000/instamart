import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

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
    <section className="flex justify-center p-4">
      <div>
        <h1 className="font-semibold text-center">All Posts</h1>
        <div className="flex flex-col gap-4 mt-4">
          {!data.length && <p>No Posts yet.</p>}
          <div>
            {data.map((post) => {
              return (
                <Post
                      key={post._id}
                      caption={post.caption}
                      imageName={post.imageName}
                      url={post.url}
                      id={post._id}
                      fetchPost={ fetchPost }
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
