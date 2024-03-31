import React, { useState } from 'react';
import Comment from './Comment';
import Form2 from './Form2';


function Post(props){

  const [likes, setLikes] = useState(0);

function handleLike(){
  setLikes(likes + 1);
}

const [comment, setComment] = useState([])

  let handleNewSubmission = (data) => {
    setComment([...comment, data])
  }

  return(
    <div>
      <h2>{props.author}</h2>
      <h3>{props.content}</h3>
      
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      <p>Comments:</p>
      <Form2 onNewSubmit={handleNewSubmission} />
      <Comment content={comment} />

    </div>
  ) 
}
export default Post