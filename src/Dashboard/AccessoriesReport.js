import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import './AccessoriesReport.css';

const initialAccessories = [
    { id: 1, name: 'Car Stereo', price: 199.99, description: 'High quality car stereo system.', image: 'https://m.media-amazon.com/images/I/91DZroew4dL.jpg' },
    { id: 2, name: 'GPS Navigator', price: 129.99, description: 'Reliable GPS navigation system.', image: 'https://images.jdmagicbox.com/quickquotes/images_main/car-gps-navigation-system-2217453808-9c0fjqz1.jpg' },
    { id: 3, name: 'Seat Cover', price: 59.99, description: 'Comfortable and durable seat covers.', image: 'data:image/jpeg;base64,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' },
];

const AccessoriesReport = () => {
    const [accessories, setAccessories] = useState(initialAccessories);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({ name: '', price: '', description: '', image: '' });

    const handleEdit = (index) => {
        setEditIndex(index);
        setFormData(accessories[index]);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        const updatedAccessories = accessories.map((accessory, index) =>
            index === editIndex ? formData : accessory
        );
        setAccessories(updatedAccessories);
        setEditIndex(null);
    };

    const handleAdd = () => {
        setAccessories([...accessories, { ...formData, id: accessories.length + 1 }]);
        setFormData({ name: '', price: '', description: '', image: '' });
    };

    const handleDelete = (index) => {
        setAccessories(accessories.filter((_, i) => i !== index));
    };

    return (
        <div className="adminaccessories-container">
            <AdminSidebar />
            <div className="adminaccessories-main">
                <h1 className='ca'>Car Accessories Reports</h1>
                <div className="adminaccessories-grid">
                    {accessories.map((accessory, index) => (
                        <div key={index} className="adminaccessories-card">
                            <img src={accessory.image} alt={accessory.name} className="adminaccessories-image" />
                            <h2>{accessory.name}</h2>
                            <p>Price: ${accessory.price}</p>
                            <p>{accessory.description}</p>
                            <div className="adminaccessories-buttons">
                                <button onClick={() => handleEdit(index)} className="edit">Edit</button>
                                <button onClick={() => handleDelete(index)} className="delete">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
                {editIndex !== null && (
                    <div className="adminaccessories-form">
                        <h2>Edit Accessory</h2>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Price:
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Description:
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            ></textarea>
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
                        <button onClick={handleSave} className="save">Save</button>
                    </div>
                )}
                <div className="adminaccessories-form">
                    <h2>Add New Accessory</h2>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Price:
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
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
                    <button onClick={handleAdd} className="add">Add</button>
                </div>
            </div>
        </div>
    );
};

export default AccessoriesReport;
