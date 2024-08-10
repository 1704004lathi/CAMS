
import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import GridView from './GridView'; // Import the GridView component
import './AdminDashboard.css';

const mockServiceRecords = [
  { name: 'Jan', completed: 40, pending: 10 },
  { name: 'Feb', completed: 50, pending: 20 },
  { name: 'Mar', completed: 70, pending: 5 },
  // Add more data as needed
];

const mockCarStatistics = [
  { name: 'Jan', totalCars: 100, rented: 70, available: 30 },
  { name: 'Feb', totalCars: 100, rented: 80, available: 20 },
  { name: 'Mar', totalCars: 100, rented: 60, available: 40 },
  // Add more data as needed
];

const mockAccessoriesStatistics = [
  { name: 'Jan', total: 50, sold: 30 },
  { name: 'Feb', total: 60, sold: 45 },
  { name: 'Mar', total: 55, sold: 35 },
  // Add more data as needed
];

function WelcomeDashboard() {
  const [serviceRecords, setServiceRecords] = useState([]);
  const [carStatistics, setCarStatistics] = useState([]);
  const [accessoriesStatistics, setAccessoriesStatistics] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    setServiceRecords(mockServiceRecords);
    setCarStatistics(mockCarStatistics);
    setAccessoriesStatistics(mockAccessoriesStatistics);
  }, []);

  return (
    <div className="admindash-container">
      <AdminSidebar />
      <div className="admindash-content">
        <GridView /> {/* Add GridView at the top */}
        {/* <h1 className='wal'>Welcome to the Admin Dashboard</h1> */}
        <div className="dashboard-section">
          <h2>Service Records</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={serviceRecords}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" fill="#8884d8" />
              <Bar dataKey="pending" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="dashboard-section">
          <h2>Car Statistics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={carStatistics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="totalCars" stroke="#8884d8" />
              <Line type="monotone" dataKey="rented" stroke="#82ca9d" />
              <Line type="monotone" dataKey="available" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="dashboard-section">
          <h2>Accessories Selling Statistics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={accessoriesStatistics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#8884d8" />
              <Bar dataKey="sold" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default WelcomeDashboard;
