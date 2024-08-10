import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faTools, faCarOn } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Navigation from "../Nav/Navigation";

const services = [
    {
        title: "CAR RENTAL SERVICE",
        description: "Experience hassle-free travel with our reliable car rental service, offering a wide range of vehicles to suit every need and budget.",
        icon: faCar,
        image: 'https://st2.depositphotos.com/1022214/5248/i/450/depositphotos_52489449-stock-photo-man-offering-a-car-key.jpg',
        link: '/CarListing'
    },
    {
        title: "CAR REPAIR SERVICES",
        description: "Expert car repair service with quick turnaround times. Quality parts and skilled technicians ensure your vehicle is road-ready.",
        icon: faTools,
        image: 'https://images.pexels.com/photos/8986148/pexels-photo-8986148.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: '/Repair'
    },
    {
        title: "CAR ACCESSORIES SERVICE",
        description: "Enhance your driving experience with our car accessories. Start from GPS, we have everything to personalize your vehicle.",
        icon: faCarOn,
        image: 'https://img.freepik.com/free-photo/modern-led-headlight-white-automobile_23-2147963070.jpg?ga=GA1.1.696649662.1702403564&semt=ais_user',
        link: '/ProductList'
    }
];

const Services = () => {
    return (
        <section className='service-head-container'>
             <Navigation />
        <div className="service-container">
            {/* <header className="service-header">
            </header> */}
               
            <div className="service-content">
                {services.map((service, index) => (
                    <div key={index} className={`service-card service-card${index + 1}`}>
                        <img src={service.image} alt={service.title} className="service-image" />
                        <div className="service-card-content">
                            <h2 className="service-title">{service.title}</h2>
                            <div className="service-overlay">
                                <FontAwesomeIcon icon={service.icon} className="service-icon" />
                                <p className="service-para">{service.description}</p>
                                <Link to={service.link} className="service-link">Go To</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
}

export default Services;
