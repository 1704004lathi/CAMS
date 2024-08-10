import React, { useState, useEffect } from 'react';
import './ReportPage.css'; // Add your CSS styles here
import AdminSidebar from './AdminSidebar';

const mockData = {
    carAccessories: [
        { id: 1, name: 'Leather Seat Covers', sold: 150, revenue: 3000 },
        { id: 2, name: 'LED Headlights', sold: 120, revenue: 2400 },
        { id: 3, name: 'Car Mats', sold: 200, revenue: 2000 },
    ],
    carRental: [
        { id: 1, model: 'Toyota Corolla', rentals: 80, revenue: 16000 },
        { id: 2, model: 'Honda Civic', rentals: 60, revenue: 12000 },
        { id: 3, model: 'Ford Focus', rentals: 40, revenue: 8000 },
    ],
    carService: [
        { id: 1, service: 'Oil Change', completed: 100, revenue: 5000 },
        { id: 2, service: 'Brake Replacement', completed: 70, revenue: 7000 },
        { id: 3, service: 'Tire Rotation', completed: 90, revenue: 4500 },
    ],
};

const incrementNumber = (start, end, duration, callback) => {
    let startTime = null;
    const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const value = Math.min(Math.round((progress / duration) * (end - start) + start), end);
        callback(value);
        if (progress < duration) {
            requestAnimationFrame(step);
        }
    };
    requestAnimationFrame(step);
};

const ReportPage = () => {
    const [data, setData] = useState({ carAccessories: [], carRental: [], carService: [] });

    useEffect(() => {
        // Simulate a data fetch
        setData(mockData);

        // Increment numbers
        mockData.carAccessories.forEach((item, index) => {
            incrementNumber(0, item.sold, 2000, (value) => {
                setData((prevData) => {
                    const newData = { ...prevData };
                    newData.carAccessories[index].sold = value;
                    return newData;
                });
            });
            incrementNumber(0, item.revenue, 2000, (value) => {
                setData((prevData) => {
                    const newData = { ...prevData };
                    newData.carAccessories[index].revenue = value;
                    return newData;
                });
            });
        });

        mockData.carRental.forEach((item, index) => {
            incrementNumber(0, item.rentals, 2000, (value) => {
                setData((prevData) => {
                    const newData = { ...prevData };
                    newData.carRental[index].rentals = value;
                    return newData;
                });
            });
            incrementNumber(0, item.revenue, 2000, (value) => {
                setData((prevData) => {
                    const newData = { ...prevData };
                    newData.carRental[index].revenue = value;
                    return newData;
                });
            });
        });

        mockData.carService.forEach((item, index) => {
            incrementNumber(0, item.completed, 2000, (value) => {
                setData((prevData) => {
                    const newData = { ...prevData };
                    newData.carService[index].completed = value;
                    return newData;
                });
            });
            incrementNumber(0, item.revenue, 2000, (value) => {
                setData((prevData) => {
                    const newData = { ...prevData };
                    newData.carService[index].revenue = value;
                    return newData;
                });
            });
        });
    }, []);

    return (
        <div className="report-page">
            <AdminSidebar className="admin-sidebar"/>
            <div className="report-content">
                <h1 className="rhh">Monthly Report</h1>

                <div className="report-section">
                    <h2>Car Accessories</h2>
                    <table className="report-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Sold</th>
                                <th>Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.carAccessories.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.sold}</td>
                                    <td>${item.revenue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="report-section">
                    <h2>Car Rental</h2>
                    <table className="report-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Model</th>
                                <th>Rentals</th>
                                <th>Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.carRental.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.model}</td>
                                    <td>{item.rentals}</td>
                                    <td>${item.revenue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="report-section">
                    <h2>Car Service</h2>
                    <table className="report-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Service</th>
                                <th>Completed</th>
                                <th>Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.carService.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.service}</td>
                                    <td>{item.completed}</td>
                                    <td>${item.revenue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReportPage;
