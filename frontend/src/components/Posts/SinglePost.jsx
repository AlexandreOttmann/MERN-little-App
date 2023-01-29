import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css'

function SinglePost({ id }) {
  const [post, setPost] = useState({});
	const navigate = useNavigate();
	
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
	
	function handleDelete(e) {
		e.preventDefault()
		const deletePost = () => {
			axios.delete(`http://localhost:8080/v2/post/${id}`)
			navigate("/articles")
		}
		deletePost()
	}

  return (
		<>
      <Link to='/articles'>Retour à tous les articles</Link>
			<button className='btn--color' onClick={handleDelete}>Supprimer</button>
      <h1>{post.title}</h1>
      <p>{post.author}</p>
      <p>{post.body}</p>
    </>
  );
}

export default SinglePost;
