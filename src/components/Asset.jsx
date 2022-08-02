import React, { useEffect, useState } from "react";

const Asset = () => {
  const [Post, setPosts] = useState([]);

  let getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setPosts(data));
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
