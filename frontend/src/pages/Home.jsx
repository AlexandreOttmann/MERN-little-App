import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div>Home</div>
      <Link to='/articles'> listes des articles</Link>
    </>
  );
}

export default Home;
