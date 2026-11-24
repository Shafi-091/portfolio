import React from 'react';
import { Mail, Phone, FileText, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>SHAFIAHMEDH</h2>
            <p>Software Developer building scalable systems and intelligent agent workflows.</p>
            <div className="footer-contact-details">
              <a href="mailto:shafiahamedh.r2021it@gmail.com" className="contact-item">
                <Mail size={16} /> shafiahamedh.r2021it@gmail.com
              </a>
              <a href="tel:+918608700578" className="contact-item">
                <Phone size={16} /> +91 8608700578
              </a>
              <span className="contact-item">
                <Globe size={16} /> Coimbatore, India
              </span>
            </div>
          </div>
          
          <div className="footer-actions-wrap">
            <div className="footer-socials">
              <a href="https://github.com/Shafi-091/" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
                <GithubIcon size={22} />
              </a>
              <a href="https://www.linkedin.com/in/safiahamedh046/" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
                <LinkedinIcon size={22} />
              </a>
              <a href="mailto:shafiahamedh.r2021it@gmail.com" className="social-link" title="Email">
                <Mail size={22} />
              </a>
              <a href="tel:+918608700578" className="social-link" title="Call: +91 8608700578">
                <Phone size={22} />
              </a>
            </div>
            <a 
              href="#contact" 
              className="footer-resume-btn"
            >
              <FileText size={16} /> Contact Me
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SHAFIAHMEDH. All rights reserved.</p>
          <p>Designed & Built with Python & Modern React.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
