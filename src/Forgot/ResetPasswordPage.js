import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Reset.css'; // Importing the CSS file
import Navigation from "../Nav/Navigation";

export default function ResetPasswordPage() {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const history = useNavigate();

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
            history.push('/login');
        } else {
            setMessage('There was an error. Please try again.');
        }
    };

    return (
        <div className="container reset-password-container">
            <Navigation />
            <h2 className='hi'>Reset Password</h2><br/>
            <form onSubmit={handleSubmit} className='hello'>
                <p>
                    <label className='how'>New Password</label><br/>
                    <input
                        className='ar'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </p>
                <p>
                    <label className='how'>Confirm Password</label><br/>
                    <input
                        className='ar'
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </p>
                <p>
                    <button type="submit" className='you'>Reset Password</button>
                </p>
            </form>
            {message && <p className="messagehi">{message}</p>}
        </div>
    );
}
