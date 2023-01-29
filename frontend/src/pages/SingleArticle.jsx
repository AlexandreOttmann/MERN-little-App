import React from 'react';
import { useParams } from 'react-router-dom';

function SingleArticle() {
  let { id } = useParams();

  console.log(id);

  return <div>SingleArticle</div>;
}

export default SingleArticle;
