import React, { useState, useEffect } from 'react';
import './UserManagement.css';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import axios from 'axios';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/users/${id}`)
            .then(() => setUsers(users.filter(user => user.id !== id)))
            .catch(error => console.error('Error deleting user:', error));
    };

    const handleEdit = (user) => {
        navigate(`/edit-user/${user.id}`, { state: user });
    };

    return (
        <div className="userman-user-management">
            <AdminSidebar className="usermanadmin-sidebar" />
            <div className="userman-user-management-content">
                <h1 className="userman">User Management</h1>
                <table className="userman-user-table">
                    <thead>
                        <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>
                                    <img src="https://via.placeholder.com/50" alt="Profile" className="userman-profile-pic" />
                                </td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="userman-button" onClick={() => handleEdit(user)}>Edit</button>
                                    <button className="userman-remove-button" onClick={() => handleDelete(user.id)}>Delete</button>
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
