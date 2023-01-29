import React, {useState, useEffect} from 'react';
import axios from 'axios';

function AllArticles() {
	const [posts, setPosts] = useState([])
	
	useEffect(() => {
		getAllPost()
	}, [])


	async function getAllPost() {
		try {
			const data = await axios.get('http://localhost:8080/v2/allposts')
			setPosts(data.data);
		}
		catch(error) {
			console.log(error);
		}
	}
	
  return (
    <>
      <div>AllArticles</div>
    </>
  );
}

export default AllArticles;
