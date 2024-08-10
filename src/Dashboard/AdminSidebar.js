import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBox, faChartLine, faCog, faTools, faCar, faShoppingCart, faSignOutAlt,faHome } from '@fortawesome/free-solid-svg-icons';
import './AdminSidebar.css'; // Add your CSS here
import logo from '../logo bg removed (2).png';

function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
     
      <ul>
      <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/UserManagement">
            <FontAwesomeIcon icon={faUser} />
            <span>User Management</span>
          </Link>
        </li>
        
        {/* <li>
          <Link to="/admin/orders">
            <FontAwesomeIcon icon={faBox} />
            <span>Order Management</span>
          </Link>
        </li> */}
        <li>
          <Link to="/ReportPage">
            <FontAwesomeIcon icon={faChartLine} />
            <span>Reports</span>
          </Link>
        </li>
        <li>
          <Link to="/SettingsPage">
            <FontAwesomeIcon icon={faCog} />
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link to="/ServiceReport">
            <FontAwesomeIcon icon={faTools} />
            <span>Service Records</span>
          </Link>
        </li>
        <li>
          <Link to="/RentalReport">
            <FontAwesomeIcon icon={faCar} />
            <span>Rental Management</span>
          </Link>
        </li>
        <li>
          <Link to="/AccessoriesReport">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>Accessories Sales</span>
          </Link>
        </li>
      </ul>
      <div className="logout">
        <Link to="/Login">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default AdminSidebar;
