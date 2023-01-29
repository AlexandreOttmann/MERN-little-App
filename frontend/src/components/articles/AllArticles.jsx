import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function AllArticles() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPost();
  }, []);

  async function getAllPost() {
    try {
      const reponse = await axios.get('http://localhost:8080/v2/allposts');
      setPosts(reponse.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>AllArticles</div>
      {posts.map((post) => (
        <div key={post._id}>
					<h2><Link to={post._id}>{post.title}</Link></h2>
					<p>{post.author}</p>
					<p>{post.body}</p>
        </div>
      ))}
    </>
  );
}

export default AllArticles;