import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments`;

    axios.get(url).then((res) => {
      console.log(res.data);
      setComments(res.data.slice(0, 30));
    });
  })

  return (
    <div style={{padding:'40px'}}>
      <h1>COMMENTS</h1>
      {comments.map(comment => (
        <div>
          <p></p>
          <li key={comment.id}>{comment.id}. {comment.name} </li>
        </div>
      ))}
    </div>
  )
}

export default Comments