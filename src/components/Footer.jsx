import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          {/* Contact Info */}
          <Col md={4} className="mb-4">
            <h5>Contact Us</h5>
            <p>
              <FaPhone /> +91 98765 43210
            </p>
            <p>
              <FaEnvelope /> contact@coffeecart.com
            </p>
            <p>
              <FaMapMarkerAlt /> 123 Coffee Street, Roast City, India
            </p>
          </Col>

          {/* Useful Links */}
          <Col md={4} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#future">Future Aspects</a>
              </li>
            </ul>

            <div className="social-icons mt-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>

          {/* Query Form */}
          <Col md={4}>
            <h5>Send a Query</h5>
            <Form>
              <Form.Group className="mb-2">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Your Message"
                />
              </Form.Group>
              <Button variant="dark" size="sm" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

        <hr />
        <p className="text-center mb-0">
          &copy; 2025 CoffeeCart. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
