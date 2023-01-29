import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function SingleArticle() {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getSinglePost(id);
  }, []);

  async function getSinglePost(id) {
    console.log(id);
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

export default SingleArticle;
