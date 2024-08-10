import React, { useState, useEffect } from 'react';
import './UserManagement.css'; // Add your CSS styles here
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

// Mock user data for testing
const mockUsers = [
    {
        id: 1,
        profile: 'https://via.placeholder.com/50',
        name: 'Alice Smith',
        gender: 'Female',
        age: 30,
        email: 'alice.smith@example.com',
        status: 'Active'
    },
    {
        id: 2,
        profile: 'https://via.placeholder.com/50',
        name: 'Bob Johnson',
        gender: 'Male',
        age: 25,
        email: 'bob.johnson@example.com',
        status: 'Inactive'
    },
    {
        id: 3,
        profile: 'https://via.placeholder.com/50',
        name: 'Charlie Brown',
        gender: 'Non-binary',
        age: 28,
        email: 'charlie.brown@example.com',
        status: 'Active'
    },
    {
        id: 4,
        profile: 'https://via.placeholder.com/50',
        name: 'Charlie Brown',
        gender: 'Non-binary',
        age: 28,
        email: 'charlie.brown@example.com',
        status: 'Active'
    }
];

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the list of users from the backend
        fetch('/api/users')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                return mockUsers;
            })
            .then((data) => setUsers(data))
            .catch((error) => {
                console.error('Error fetching users:', error);
                setUsers(mockUsers);
            });
    }, []);

    const handleLogout = (userId) => {
        fetch(`/api/logout/${userId}`, {
            method: 'POST',
        })
            .then(() => navigate('/login'))
            .catch((error) => console.error('Error logging out:', error));
    };

    const handleRemove = (userId) => {
        // Handle user removal logic
        fetch(`/api/remove/${userId}`, {
            method: 'DELETE',
        })
            .then(() => {
                // Update the user list after removal
                setUsers(users.filter(user => user.id !== userId));
            })
            .catch((error) => console.error('Error removing user:', error));
    };

    return (
        <div className="userman-user-management">
            <AdminSidebar />
            <div className="userman-user-management-content">
                <h1 className='userman'>User Management</h1>
                <table className="userman-user-table">
                    <thead>
                        <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td><img src={user.profile} alt="Profile" className="userman-profile-pic" /></td>
                                <td>{user.name}</td>
                                <td>{user.gender}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                                <td>{user.status}</td>
                                <td>
                                    <button className="userman-button" onClick={() => handleLogout(user.id)}>Logout</button>
                                    <button className="userman-remove-button" onClick={() => handleRemove(user.id)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;
