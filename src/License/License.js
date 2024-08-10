import React, { useState } from 'react';
import './License.css';
import Navigation from "../Nav/Navigation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    licenseNumber: '',
    aadhaarNumber: '',
    paymentMethod: '', // Added state for payment method
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/book-service', { // Adjust the endpoint URL as needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Service successfully booked!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          licenseNumber: '',
          aadhaarNumber: '',
          paymentMethod: '', // Reset payment method
        });
      } else {
        alert('Failed to book service. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while booking the service.');
    }
  };

  return (
    <div className="license-contact-container">
      <Navigation />
      <h1>Your Contact Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="license-form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="license-form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="license-form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="license-form-group">
          <label htmlFor="licenseNumber">License Number:</label>
          <input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="license-form-group">
          <label htmlFor="vehicleNumber">Vehicle Number:</label>
          <input
            type="text"
            id="vehicleNumber"
            name="vehicleNumber"
            value={formData.vehicleNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="license-form-group">
          <label htmlFor="carModel">Car Model:</label>
          <input
            type="text"
            id="vehicleModel"
            name="carModel"
            value={formData.carModel}
            onChange={handleChange}
            required
          />
        </div>
        <div className="license-form-group">
          <label htmlFor="aadhaarNumber">Aadhaar Number:</label>
          <input
            type="text"
            id="aadhaarNumber"
            name="aadhaarNumber"
            value={formData.aadhaarNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="license-form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <fieldset className="license-payment-methods">
          <legend>Payment Method</legend>
          <div className="license-form-radio">
            <label htmlFor="visa">
              <input
                type="radio"
                id="visa"
                name="paymentMethod"
                value="visa"
                checked={formData.paymentMethod === 'visa'}
                onChange={handleChange}
              />
              Visa Payment
            </label>
          </div>
          <div className="license-form-radio">
            <label htmlFor="paypal">
              <input
                type="radio"
                id="paypal"
                name="paymentMethod"
                value="paypal"
                checked={formData.paymentMethod === 'paypal'}
                onChange={handleChange}
              />
              PayPal Payment
            </label>
          </div>
          <div className="license-form-radio">
            <label htmlFor="mastercard">
              <input
                type="radio"
                id="mastercard"
                name="paymentMethod"
                value="mastercard"
                checked={formData.paymentMethod === 'mastercard'}
                onChange={handleChange}
              />
              MasterCard Payment
            </label>
          </div>
        </fieldset>
        <button type="submit" className="license-button">Book Now</button>
      </form>
    </div>
  );
};

export default Contact;
