import React from 'react';
import { useParams } from 'react-router-dom';

import SinglePost from '../components/Posts/SinglePost';

function SingleArticle() {
  const { id } = useParams();
  return (
    <>
      <SinglePost id={id} />
    </>
  );
}

export default SingleArticle;
