import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import './RentalReport.css';

const initialData = [
    { id: 1, model: 'Toyota Corolla', rentals: 80, status: 'rented', image: 'https://wallpapercave.com/wp/wp4320595.jpg' },
    { id: 2, model: 'Honda Civic', rentals: 60, status: 'not rented', image: 'https://wallpapercave.com/wp/wp3067174.jpg' },
    { id: 3, model: 'Ford Focus', rentals: 40, status: 'rented', image: 'https://wallpapercave.com/wp/wp4016445.jpg' },
];

const RentalReport = () => {
    const [cars, setCars] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({ model: '', rentals: '', status: '', image: '' });
    const [topCars, setTopCars] = useState([]);
    const [carCount, setCarCount] = useState(initialData.length);

    useEffect(() => {
        setCars(initialData);
    }, []);

    useEffect(() => {
        // Trigger number animation when cars data is updated
        const timeouts = cars.map((car, index) => {
            return setTimeout(() => {
                incrementNumber(index, car.rentals);
            }, index * 200); // staggered animation start
        });

        return () => {
            timeouts.forEach(timeout => clearTimeout(timeout));
        };
    }, [cars]);

    const incrementNumber = (index, maxNumber) => {
        const element = document.getElementById(`rentals-${index}`);
        let number = 0;
        const interval = setInterval(() => {
            if (number < maxNumber) {
                number++;
                element.innerText = number;
            } else {
                clearInterval(interval);
            }
        }, 10); // interval for incrementing the number
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setFormData(cars[index]);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        const updatedCars = cars.map((car, index) =>
            index === editIndex ? { ...car, ...formData } : car
        );
        setCars(updatedCars);
        setEditIndex(null);
        setFormData({ model: '', rentals: '', status: '', image: '' });
    };

    const handleAdd = () => {
        setCars([...cars, { ...formData, id: cars.length + 1 }]);
        setFormData({ model: '', rentals: '', status: '', image: '' });
    };

    const handleRemove = (index) => {
        const updatedCars = cars.filter((_, i) => i !== index);
        setCars(updatedCars);
    };

    const handleTopCars = () => {
        const sortedCars = [...cars].sort((a, b) => b.rentals - a.rentals);
        setTopCars(sortedCars.slice(0, 3));
    };

    const handleCarCountChange = (e) => {
        setCarCount(e.target.value);
    };

    return (
        <div className="adminrental-container">
            <AdminSidebar />
            <div className="adminrental-main">
                <h1 className='cr'>Car Rental Reports</h1>

                <div className="adminrental-controls">
                    <label>
                        Number of Cars on Rental Page:
                        <input
                            type="number"
                            value={carCount}
                            onChange={handleCarCountChange}
                        />
                    </label>
                    <button onClick={handleTopCars}>Show Top Rental Cars</button>
                </div>

                <table className="adminrental-table">
                    <thead>
                        <tr>
                            <th>Model</th>
                            <th>Rentals</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.slice(0, carCount).map((car, index) => (
                            <tr key={index}>
                                <td>{car.model}</td>
                                <td id={`rentals-${index}`}>0</td>
                                <td>{car.status}</td>
                                <td>
                                    <button onClick={() => handleEdit(index)} className='edt'>Edit</button>
                                    <button onClick={() => handleRemove(index)} className='rmv'>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="adminrental-form">
                    <h2>{editIndex !== null ? 'Edit Car' : 'Add New Car'}</h2>
                    <label>
                        Model:
                        <input
                            type="text"
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Rentals:
                        <input
                            type="number"
                            name="rentals"
                            value={formData.rentals}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Status:
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        >
                            <option value="rented">Rented</option>
                            <option value="not rented">Not Rented</option>
                        </select>
                    </label>
                    <label>
                        Image URL:
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                        />
                    </label>
                    <button onClick={editIndex !== null ? handleSave : handleAdd}>
                        {editIndex !== null ? 'Save' : 'Add'}
                    </button>
                </div>

                <div className="adminrental-topcars">
                    <h2>Top Rental Cars</h2>
                    <ul>
                        {topCars.map((car, index) => (
                            <li key={index} className="topcar-item">
                                <img src={car.image} alt={car.model} className="topcar-image"/>
                                {car.model} - <span className="increment-number">{car.rentals}</span> rentals
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RentalReport;
