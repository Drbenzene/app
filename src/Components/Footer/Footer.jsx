import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footerNav}>
        <ul>
        <li> <a href="https://react-icons.github.io/react-icons/icons?name=md" >
          <AiFillGithub size="30px"/>
        </a> </li>
        <li> <a href="">
          <BsFacebook size="30px" />
        </a> </li>
        <li><a href="">
          <AiFillTwitterCircle size="30px" />
        </a> </li>
        <li> <a href="">
          <AiFillInstagram size="30px" />
        </a> </li>
        <li><a href="">
          <AiOutlineMail size="30px" />
        </a> </li>
        </ul>
      </div>

      <div className={styles.name}>
        <p>©2022 Boyinbode Ebenezer Ayomide</p></div>
    </div>
  );
}

export default Footer;
