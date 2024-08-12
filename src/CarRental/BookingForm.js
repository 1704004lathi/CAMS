import React, { useState } from "react";
import axios from "axios";
import './BookingForm.css';
import { Form, FormGroup } from "reactstrap";
import Navigation from "../Nav/Navigation";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    aadharNumber: '',
    numOfPersons: '1 person',
    journeyStartDate: '',
    journeyEndDate: '',
    journeyTime: '',
    description: '',
    paymentMethod: '',
  });

  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    
    const { firstName, lastName, email, phoneNumber, address, aadharNumber, journeyStartDate, journeyEndDate, journeyTime, paymentMethod } = formData;

    if (firstName && lastName && email && phoneNumber && address && aadharNumber && journeyStartDate && journeyEndDate && journeyTime && paymentMethod) {
      try {
        const response = await axios.post('http://localhost:8080/api/booking/create', formData);
        
        if (response.status === 200) {
          setAlertMessage('Booking submitted successfully!');
          setAlertType('success');
          // Reset form
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address: '',
            aadharNumber: '',
            numOfPersons: '1 person',
            journeyStartDate: '',
            journeyEndDate: '',
            journeyTime: '',
            description: '',
            paymentMethod: '',
          });
        } else {
          setAlertMessage(`Failed to submit booking: ${response.statusText}`);
          setAlertType('error');
        }
      } catch (error) {
        setAlertMessage(`Error: ${error.message}`);
        setAlertType('error');
      }
    } else {
      setAlertMessage('Please fill in all required fields.');
      setAlertType('error');
    }
  };

  return (
    <div className="bgp">
      <Navigation />
      <Form onSubmit={submitHandler}>
      {alertMessage && (
          <div className={`alert alert-${alertType}`}>
            {alertMessage}
          </div>
        )}
        <h1 className="cre">Your Contact Details</h1><br />
        {/* {alertMessage && (
          <div className={`alert alert-${alertType}`}>
            {alertMessage}
          </div>
        )} */}
        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="number"
            name="aadharNumber"
            placeholder="Aadhar Number"
            value={formData.aadharNumber}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <select
            name="numOfPersons"
            value={formData.numOfPersons}
            onChange={handleChange}
          >
            <option value="1 person">1 Person</option>
            <option value="2 person">2 Person</option>
            <option value="3 person">3 Person</option>
            <option value="4 person">4 Person</option>
            <option value="5+ person">5+ Person</option>
          </select>
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          From:
          <input
            type="date"
            name="journeyStartDate"
            value={formData.journeyStartDate}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          To:
          <input
            type="date"
            name="journeyEndDate"
            value={formData.journeyEndDate}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="time"
            name="journeyTime"
            value={formData.journeyTime}
            onChange={handleChange}
            className="time__picker"
          />
        </FormGroup>

        <FormGroup>
          <textarea
            rows={5}
            name="description"
            className="textarea"
            placeholder="Write any further description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </FormGroup>

        <fieldset className="booking_form-payment-methods">
          <legend>Payment Method</legend>
          <div className="booking_form-form-radio">
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
          <div className="booking_form-form-radio">
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
          <div className="booking_form-form-radio">
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
        <button type="submit" className="booking__submit-button">Book Now</button>
      </Form>
    </div>
  );
};

export default BookingForm;
