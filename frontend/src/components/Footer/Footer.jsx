import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            iure deserunt molestias ipsam nihil porro debitis voluptatem.
            Assumenda aspernatur dignissimos fuga error.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET In TOUCH</h2>
            <ul>
                <li>+021 35374488</li>
                <li>contact@GoFood.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright 2024 Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
