import React from "react";
import ContactImg from "../assets/ContactImg.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="Contact">
      <div className="contact">
        <div className="ContactDetails">
          <h3>LET'S CONNECT</h3>
          <div className="details">
            <div className="detail">
              <i class="fa-solid fa-phone"></i>
              <p>+91 9877453524</p>
            </div>
            <div className="detail">
              <i class="fa-solid fa-envelope"></i>
              <p>hrntsnghhh@gmail.com</p>
            </div>
            <div className="detail">
              <i class="fa-solid fa-location-dot"></i>
              <p>Chandigarh University, Mohali</p>
            </div>
          </div>
          <form action="mailto:hrntsnghhh@gmail.com" method="post">
            <input
              type="text"
              name="Name"
              placeholder="Name"
              autoComplete="NO"
              required
            />
            <input type="text" name="Email" placeholder="Email" required />
            <textarea
              placeholder="Write your Message"
              name="Message"
              id=""
              cols="30"
              rows="5"
              required
            ></textarea>
            <button className="submit">SEND</button>
          </form>
        </div>
        <img src={ContactImg} alt="" />
      </div>
    </div>
  );
};

export default Contact;
