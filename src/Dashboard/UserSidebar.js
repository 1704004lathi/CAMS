import React from 'react';
import { Link } from 'react-router-dom';
import './UserSidebar.css'; // Add your CSS here

function UserSidebar() {
  return (
    <div className="user-sidebar">
      <h2>User Dashboard</h2>
      <ul>
        <li><Link to="/user/profile">Profile</Link></li>
        <li><Link to="/user/bookings">My Bookings</Link></li>
        <li><Link to="/user/settings">Settings</Link></li>
      </ul>
    </div>
  );
}

export default UserSidebar;
