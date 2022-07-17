import React, { useState, useEffect } from "react";
// import styles from './Contact.module.css'
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  return (
    <div className="container">
      <div>
        <section id="contact">
          <div className="contact-box">
            <div className="contact-links">
              <h2>CONTACT</h2>
              <div className="links">
                <div className="link">
                  <a>
                    <img
                      src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                      alt="linkedin"
                    />
                  </a>
                </div>
                <div className="link">
                  <a>
                    <img
                      src="https://i.postimg.cc/YCV2QBJg/github.png"
                      alt="github"
                      width="45px"
                      height="45px"
                    />
                  </a>
                </div>
                <div className="link">
                  <a>
                    <img
                      src="https://i.postimg.cc/W4Znvrry/codepen.png"
                      alt="codepen"
                      width="45px"
                      height="45px"
                    />
                  </a>
                </div>
                <div className="link">
                  <a>
                    <img
                      src="https://i.postimg.cc/NjLfyjPB/email.png"
                      alt="email"
                      width="45px"
                      height="45px"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form>
                <div className="form-item">
                  <input type="text" name="sender" required="" />
                  <label>Name:</label>
                </div>
                <div className="form-item">
                  <input type="text" name="email" required="" />
                  <label>Email:</label>
                </div>
                <div className="form-item">
                  <textarea
                    className=""
                    name="message"
                    required=""
                    defaultValue={""}
                  />
                  <label>Message:</label>
                </div>
                <button className="submit-btn">Send</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
