import React from "react";
import { Link } from "react-router-dom";
import FAQ from "../Components/FAQ";
import smileImage from "../assets/dental-image01.jpg";

function Home() {
  return (
    <div>
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h1 className="display-5 fw-bold">Your Smile, Our Passion</h1>
              <p className="lead">
                Advanced dental care with compassion and excellence.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg mt-3">
                Book Appointment
              </Link>
            </div>

            {/* Image Section */}
            <div className="col-md-6 text-center">
              <img
                src={smileImage}
                alt="Smiling patient"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "350px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Clinic Preview */}
      <section className="container my-5">
        <h2>About Our Clinic</h2>
        <p>
          We are a trusted dental clinic offering a wide range of services all
          over india. Our team of experienced professionals ensures that every
          patient gets personalized, high-quality care in a comfortable
          environment.
        </p>
        <Link to="/about" className="btn btn-outline-primary">
          Learn More
        </Link>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h2>Why Choose Us?</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <i className="fas fa-user-md fa-2x mb-2"></i>
              <h5>Experienced Doctors</h5>
              <p>Skilled and compassionate dental experts.</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-tooth fa-2x mb-2"></i>
              <h5>Modern Equipment</h5>
              <p>
                State-of-the-art dental technology for safe and precise
                treatments.
              </p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-heart fa-2x mb-2"></i>
              <h5>Patient-Centered Care</h5>
              <p>We focus on your comfort and long-term oral health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row">
          <div className="col-md-4 text-center mb-4">
            <i className="fas fa-smile fa-2x mb-2 text-primary"></i>
            <h5>Teeth Whitening</h5>
            <p>
              Brighten your smile with our safe and effective whitening
              treatments.
            </p>
          </div>
          <div className="col-md-4 text-center mb-4">
            <i className="fas fa-teeth fa-2x mb-2 text-primary"></i>
            <h5>Braces & Aligners</h5>
            <p>
              Straighten your teeth discreetly with clear aligners or braces.
            </p>
          </div>
          <div className="col-md-4 text-center mb-4">
            <i className="fas fa-syringe fa-2x mb-2 text-primary"></i>
            <h5>Root Canal</h5>
            <p>Pain-free root canal therapy to save your natural teeth.</p>
          </div>
        </div>
        <div className="text-center">
          <Link to="/services" className="btn btn-outline-primary">
            View All Services
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="container">
        <FAQ />
      </div>
    </div>
  );
}

export default Home;
