import React from "react";
import {Link} from 'react-router-dom'
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.content}>
      <h1>Welcome To ItskillsCenter Kitchen</h1>
      <h3>Tasty Meals A Click Away</h3>
      <Link to="/contact">
      <button className={styles.button}>Order Now</button>
      </Link>
      </div>
    </div>
  );
}

export default Home;
