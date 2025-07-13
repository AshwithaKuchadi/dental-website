import React from "react";
import clinicImage from "../assets/dental-image02.jpg";

function About() {
  return (
    <div className="container my-5">
      <section className="mb-5">
        <h2>About Our Clinic</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>
              Welcome to our Dental Clinic in Hyderabad. At Lavanya Dental, we
              are dedicated to providing exceptional dental care in a relaxing
              and patient-friendly environment. Our clinic is equipped with
              state-of-the-art technology and adheres to the highest standards
              of hygiene and safety. Whether it’s routine dental checkups,
              cosmetic enhancements, or complex procedures, our goal is to help
              you achieve a healthy and confident smile.
            </p>
            <p>
              We take pride in our transparent approach, ethical practices, and
              a focus on patient education. Our team ensures that each patient
              receives personalized attention and a clear understanding of their
              treatment options.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={clinicImage}
              alt="Lavanya Dental Clinic"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h3>Our Mission & Philosophy</h3>
        <p>
          Our mission is to deliver ethical, affordable, and high-quality dental
          care that improves lives. We are committed to building long-term
          relationships with our patients through integrity, compassion, and
          trust. Every smile we treat is a step towards a happier, healthier
          community.
        </p>
      </section>

      <section>
        <h3>What Our Patients Say</h3>
        <div className="mt-4">
          <blockquote className="blockquote">
            <p>
              "One of the best dental experiences I've had! The staff is
              friendly and professional. The clinic is super clean and the
              technology they use is top-notch."
            </p>
            <footer className="blockquote-footer">Anjali K.</footer>
          </blockquote>
          <blockquote className="blockquote">
            <p>
              "I had a root canal treatment here, and it was completely
              painless. Dr. Lavanya and team explained everything clearly and
              made me feel very comfortable throughout."
            </p>
            <footer className="blockquote-footer">Rahul M.</footer>
          </blockquote>
          <blockquote className="blockquote">
            <p>
              "Highly recommend this clinic to anyone looking for reliable and
              affordable dental care in Banjara Hills. Great service!"
            </p>
            <footer className="blockquote-footer">Sneha R.</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}

export default About;
