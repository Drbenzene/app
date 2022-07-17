import React from 'react'
import logo from "../Assets/blog.png"
import {Link} from "react-router-dom"
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <div className={styles.navBar}>

      <div className="left">
        <Link to="/">
        <img src={logo} alt="logo" className={styles.logo} style={{width: '200px !important'}} />
        </Link>
      </div>

      <div className={styles.right}>
        <Link className={styles.link} to="/">Home</Link>
        <Link className={styles.link} to="/about">About</Link>
        <Link className={styles.link} to="/comments">Comments</Link>
        <Link className={styles.link} to="/photo">Photo</Link>
        <Link className={styles.link} to="/post">Post</Link>
        <Link className={styles.link} to="/todo">Todo</Link>
        <Link className={styles.link} to="/contact">Contact</Link>
      </div>
      
    </div>
  )
}

export default NavBar