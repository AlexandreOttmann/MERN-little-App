import React from 'react';
import { useParams } from 'react-router-dom';

import SinglePost from '../components/Posts/SinglePost';

function SingleArticle() {
	// useParams come form react router to get params from url
  const { id } = useParams();
  return (
		<>
			{/* We need id props to display the single article */}
      <SinglePost id={id} />
    </>
  );
}

export default SingleArticle;
