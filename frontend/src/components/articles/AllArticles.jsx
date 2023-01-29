import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllArticles() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPost();
  }, []);

  async function getAllPost() {
    try {
      const data = await axios.get('http://localhost:8080/v2/allposts');
      setPosts(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>AllArticles</div>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </>
  );
}

export default AllArticles;
