import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import { contactConfig } from "../content_option";
import './contactstyle.css';
import Navigation from "../Nav/Navigation";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/contact/create', formData);
      if (response.status === 200) {
        setAlertMessage('Form submitted successfully');
        setAlertType('success');
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        setAlertMessage(`Failed to send message: ${response.statusText}`);
        setAlertType('error');
      }
    } catch (error) {
      setAlertMessage(`Error: ${error.message}`);
      setAlertType('error');
    }
  };

  return (
    <div className="cont">
      <Navigation />
      <Container>
        <br></br><br></br><br></br>
      {alertMessage && (
          <div className={`alert alert-${alertType}`}>
            {alertMessage}
          </div>
        )}
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="display-4 mb-4">Contact Me!</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") && (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form className="contact__form w-100" onSubmit={handleSubmit}>
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
        {/* {alertMessage && (
          <div className={`alert alert-${alertType}`}>
            {alertMessage}
          </div>
        )} */}
      </Container>
    </div>
  );
}
