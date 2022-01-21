import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-info">
            <h1>Pablo D. Vallejos</h1>
            <p>Buenos Aires, Argentina</p>
        </div>
        <div className="footer-contact">
            <h3>Contact me</h3>
            <p>And let's get down to work</p>
        </div>
        <div className="footer_sns">
            <div className="design_by">Design By Pablo Vallejos</div>
            <div className="sns_links">
              <a href="https://linkedin.com/in/pablo-daniel-vallejos" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter twitter"></i>
              </a>
              <a href="https://github.com/pdvallejos" target="_blank" rel="noreferrer">
                <i className="fab fa-github github"></i>
              </a>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
