import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Forgot.css';
import Navigation from "../Nav/Navigation";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Mock API call to send reset email
        const response = await fetch('/api/request-reset-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });

        const data = await response.json();
        if (data.success) {
            setMessage('Check your email for a link to reset your password.');
            // Navigate to ResetPasswordPage after successful request
            navigate('/ResetPasswordPage');
        } else {
            setMessage('There was an error. Please try again.');
        }
    };

    return (
    <div>
        <Navigation />
        <div className="forgot-container">
           
            <h2 className="forgot-heading">Forgot password?</h2>
            <h5 className="forgot-instructions">Enter your email address and we will send you a new password</h5>
            <form onSubmit={handleSubmit} className="forgot-form-container">
                <p>
                    <label id="reset_pass_lbl" className="forgot-label">Email address</label><br/>
                    <input className="forgot-input-field"
                        type="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </p>
                   <p>
                    <Link to="/ResetPasswordPage" className="forgot-link-secondary">
                        <button className='forgot-button-reset'>Reset Password</button>
                    </Link>
                </p>
            </form>
            {message && <p className="forgot-message-box">{message}</p>}
            <footer className='forgot-footer'>
                <p>First time? <a href="/SignIn" className="forgot-link-secondary">Create an account</a>.</p>
                <p><a href="/" className="forgot-link-secondary">Back to Homepage</a>.</p>
            </footer>
        </div>
</div>
    );
}
