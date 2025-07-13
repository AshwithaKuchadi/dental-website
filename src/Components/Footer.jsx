// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 pt-4 pb-3">
      <div className="container">
        <div className="row">
          {/* Clinic Info */}
          <div className="col-md-4 mb-3">
            <h5>Dental Clinic</h5>
            <p>
              Expert dental care with a compassionate touch, located in the
              heart of Hyderabad.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white text-decoration-none">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white text-decoration-none"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>📍 Hyderabad</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ contact@dentalclinic.com</p>
          </div>
        </div>

        <hr className="border-top border-light" />
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} Dental Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
