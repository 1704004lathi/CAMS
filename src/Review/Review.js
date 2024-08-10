import React, { useState } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    rating: 0,
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleRating = (rate) => {
    setFeedback({ ...feedback, rating: rate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    // Handle feedback submission (e.g., send to a server)
  };

  return (
    <Container>
      <Title>Customer Feedback</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={feedback.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={feedback.email}
          onChange={handleChange}
          required
        />
        <RatingContainer>
          {[1, 2, 3, 4, 5].map((rate) => (
            <StarIcon
              key={rate}
              selected={rate <= feedback.rating}
              onClick={() => handleRating(rate)}
            >
              <FaStar />
            </StarIcon>
          ))}
        </RatingContainer>
        <Textarea
          name="comments"
          placeholder="Your Comments"
          value={feedback.comments}
          onChange={handleChange}
          required
        />
        <Button type="submit">Submit Feedback</Button>
      </Form>
    </Container>
  );
};

export default FeedbackPage;

const Container = styled.div`
  padding: 2rem;
  background: #0e0b16;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #a239ca;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  background: #1f1b24;
  color: #fff;
  font-size: 1rem;

  &::placeholder {
    color: #a0a0a0;
  }

  &:focus {
    outline: none;
    border: 2px solid #a239ca;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  background: #1f1b24;
  color: #fff;
  font-size: 1rem;
  resize: none;

  &::placeholder {
    color: #a0a0a0;
  }

  &:focus {
    outline: none;
    border: 2px solid #a239ca;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  background: #a239ca;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #d2a3da;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const StarIcon = styled.div`
  color: ${props => (props.selected ? '#f8e825' : '#a0a0a0')};
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #f8e825;
  }
`;
