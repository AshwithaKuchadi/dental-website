
import React from 'react';
import { Accordion } from 'react-bootstrap';

function FAQ() {
  return (
    <section className="mt-4">
      <h2>Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What services do you offer?</Accordion.Header>
          <Accordion.Body>
            We offer cleaning, whitening, braces, implants, and more.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Do you accept insurance?</Accordion.Header>
          <Accordion.Body>
            Yes, we accept most major dental insurances.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}

export default FAQ;
