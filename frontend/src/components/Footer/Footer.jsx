// import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam quidem, vel, qui illum saepe numquam molestias corrupti quasi placeat molestiae, beatae voluptas adipisci.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facbook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linked-in" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About_us</li>
            <li>Delivery</li>
            <li>Privacy-Policy</li>
          </ul>
          <h2 className='list-2'>Legal</h2>
          <ul>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+91-6263223599</li>
            <li>Tomato@gmail.com</li>
            <li>Help & Support</li>
            <li>Partner with us</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Created using MERN Stack By Anurag 💖</p>
    </div>
  )
}

export default Footer