import React from 'react';
import UserSidebar from './UserSidebar';
// import './UserDashboard.css'; // Add your CSS here

function UserDashboard() {
  return (
    <div className="user-dashboard">
      <UserSidebar />
      <div className="user-content">
        <h1 className='userdash'>Welcome to Your Dashboard</h1>
        {/* Add user-specerific content here */}
      </div>
    </div>
  );
}

export default UserDashboard;
