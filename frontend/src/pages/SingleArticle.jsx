import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

  console.log(post);

  return <div>SingleArticle</div>;
}

export default SingleArticle;
