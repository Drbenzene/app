import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './Post.module.css'
function Post() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts`;

    axios.get(url).then((res) => {
      console.log(res.data);
      setPost(res.data.slice(0, 30));
    });
  }, []);

  return (
    <div className={styles.container}>

      <h1>POSTS</h1>
      {posts.map((post) => (
        <div>
        <li key={post.id}>{post.id}. {post.title} </li>
        </div>
      ))}
    </div>
  );
}

export default Post;
