// src/pages/Services.jsx
import React from "react";

const services = [
  {
    title: "Teeth Whitening",
    icon: "fas fa-tooth",
    description:
      "Brighten your smile with professional-grade whitening treatments.",
  },
  {
    title: "Dental Implants",
    icon: "fas fa-syringe",
    description:
      "Permanent, natural-looking solutions to replace missing teeth.",
  },
  {
    title: "Braces & Aligners",
    icon: "fas fa-teeth",
    description:
      "Straighten your teeth discreetly with invisible aligners or braces.",
  },
  {
    title: "Root Canal Treatment",
    icon: "fas fa-x-ray",
    description: "Save infected teeth with pain-free root canal therapy.",
  },
  {
    title: "Cosmetic Dentistry",
    icon: "fas fa-smile",
    description:
      "Smile makeovers, veneers, and aesthetic treatments for a confident smile.",
  },
  {
    title: "Dental Cleaning",
    icon: "fas fa-toothbrush",
    description:
      "Remove plaque and tartar to prevent gum disease and cavities.",
  },
];

function Services() {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Our Dental Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <i className={`${service.icon} fa-2x text-primary mb-3`}></i>
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
