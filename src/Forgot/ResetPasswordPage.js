import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Reset.css'; // Importing the CSS file
import Navigation from "../Nav/Navigation";

export default function ResetPasswordPage() {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }

        // Mock API call to reset password
        const response = await fetch(`/api/reset-password/${token}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password })
        });

        const data = await response.json();
        if (data.success) {
            setMessage('Your password has been reset successfully.');
            navigate('/login');
        } else {
            setMessage('There was an error. Please try again.');
        }
    };

    return (
        <div>
            <Navigation />
        <div className="reset-password-container">
            
            <h2 className="reset-hi">Reset Password</h2>
            <form onSubmit={handleSubmit} className="reset-hello">
                <p>
                    <label className="reset-how">New Password</label>
                    <input
                        className="reset-ar"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </p>
                <p>
                    <label className="reset-how">Confirm Password</label>
                    <input
                        className="reset-ar"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </p>
                <p>
                    <button type="submit" className="reset-you">Reset Password</button>
                </p>
            </form>
            {message && <p className="reset-messagehi">{message}</p>}
        </div>
        </div>
    );
}
