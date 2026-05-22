import React from 'react';
import './Footer.css';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTelegramPlane,
  FaArrowRight
} from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand & Newsletter */}
        <div className="footer-section brand-section">
          <h3 className="footer-logo">MyBrand</h3>
          <p className="footer-desc">
            Crafting digital experiences that matter. Subscribe for the latest updates and exclusive offers.
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required aria-label="Email for newsletter" />
            <button type="submit" aria-label="Subscribe">
              <FaArrowRight />
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="footer-section links-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Contact">Contact</a></li>
             
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact-section">
          <h4>Contact Us</h4>
          <p> 123 Innovation Street, Cairo</p>
          <p>📞 +20 123 456 7890</p>
          <p>✉️ hello@mybrand.com</p>
        </div>

        {/* Bottom: Social & Copyright */}
        <div className="footer-bottom">
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="Telegram"><FaTelegramPlane /></a>
          </div>
          <p className="copyright">
            &copy; {currentYear}  Khaled Elfahl. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;