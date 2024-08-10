import React, { useState, useEffect } from 'react';
import AdminSidebar from '../Dashboard/AdminSidebar';
import './ServiceReport.css'; // Importing the CSS file

const ServiceReport = () => {
  const [reports, setReports] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    serviceType: '',
    description: '',
    status: '',
    cost: '',
  });

  useEffect(() => {
    // Fetch initial data
    // Replace with your data fetching logic
    setReports([
      { serviceType: 'Oil Change', description: 'Changed oil', status: 'Completed', cost: '50' },
      { serviceType: 'Brake Repair', description: 'Repaired brakes', status: 'In Progress', cost: '150' },
      { serviceType: 'Car Inspection and Check', description: 'Repaired brakes', status: 'In Progress', cost: '150' },
      { serviceType: 'Car Electronic service', description: 'Repaired brakes', status: 'In Progress', cost: '150' },
      { serviceType: 'Car Engine Service', description: 'Repaired brakes', status: 'In Progress', cost: '150' },
      { serviceType: 'Car Tyre Check', description: 'Repaired brakes', status: 'In Progress', cost: '150' },
      { serviceType: 'Car Air conditioning', description: 'Repaired brakes', status: 'In Progress', cost: '150' },
    ]);
  }, []);

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(reports[index]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    const updatedReports = reports.map((report, index) =>
      index === editIndex ? formData : report
    );
    setReports(updatedReports);
    setEditIndex(null);
    setFormData({
      serviceType: '',
      description: '',
      status: '',
      cost: '',
    });
  };

  const handleAdd = () => {
    setReports([...reports, formData]);
    setFormData({
      serviceType: '',
      description: '',
      status: '',
      cost: '',
    });
  };

  const handleRemove = (index) => {
    const updatedReports = reports.filter((_, i) => i !== index);
    setReports(updatedReports);
  };

  return (
    <div className="servicereport-container">
      <AdminSidebar />
      <div className="servicereport-main">
        <table className="servicereport-table">
          <thead>
            <tr>
              <th>Service Type</th>
              <th>Description</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index}>
                <td>{report.serviceType}</td>
                <td>{report.description}</td>
                <td>{report.status}</td>
                <td>{report.cost}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleRemove(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="servicereport-form">
          <h2>{editIndex !== null ? 'Edit Report' : 'Add New Report'}</h2>
          <label>
            Service Type:
            <input
              type="text"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <label>
            Status:
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </label>
          <label>
            Cost:
            <input
              type="text"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
            />
          </label>
          {editIndex !== null ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={handleAdd}>Add</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceReport;
