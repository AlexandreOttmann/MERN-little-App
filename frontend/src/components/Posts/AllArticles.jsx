import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllArticles() {
  const [posts, setPosts] = useState([]);

  // When component is mounted we execute this function
  useEffect(() => {
    getAllPost();
  }, []);

  // GET all posts for this url

  async function getAllPost() {
    try {
      const reponse = await axios.get('http://localhost:8080/v2/allposts');
      // stock this reponse in state
      setPosts(reponse.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>AllArticles</div>
      {/* Display all posts with map */}
      {posts.map((post) => (
        <div key={post._id}>
          <h2>
            <Link to={post._id}>{post.title}</Link>
          </h2>
          <p>{post.author}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}

export default AllArticles;
