import axios from "axios";
import React, { useEffect, useState } from "react";

const Asset = () => {
  const [posts, setPosts] = useState([]);

  const getPost = () => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((data) => data.json())
    //   .then((data) => setPosts(data));
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data));
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      {posts.map((post, i) => {
        return (
          <div key={i} style={{ backgroundColor: "gray" }}>
            <h3> Title : {post.title} </h3>
            <p> Description : {post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Asset;
