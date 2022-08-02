import React, { useEffect, useState } from "react";
import axios from "axios";

const Asset = () => {
  const [Post, setPosts] = useState([]);

  let getPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data));
  };

  useEffect(() => {
    getPosts();
  }, []);
  console.log("Post", Post);
  return (
    <div>
      {Post.map((post, i) => {
        return (
          <div
            key={i}
            style={{
              backgroundColor: "gray",
              padding: "10px",
              marginTop: "15px",
            }}
          >
            <h3> Title : {post.title} </h3>
            <p> Message : {post.body} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Asset;
