import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SinglePost({ id }) {
  const [post, setPost] = useState({});

  useEffect(() => {
    getSinglePost(id);
  }, []);

  async function getSinglePost(id) {
    try {
      const response = await axios.get(`http://localhost:8080/v2/post/${id}`);
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Link to='/articles'>Retour à tous les articles</Link>
      <h1>{post.title}</h1>
      <p>{post.author}</p>
      <p>{post.body}</p>
    </>
  );
}

export default SinglePost;
