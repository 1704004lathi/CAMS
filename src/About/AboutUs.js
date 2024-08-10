import React from 'react';
import './AboutUs.css';
// import {Link} from 'react-router-dom'
// import Footer from '../Footer/Footer';
import Navigation from "../Nav/Navigation";

const AboutUs = () => {
    return (
        
        <div className="about-us-page">
            <Navigation/>
            <div className="containers">
                <div className="about">
                    <div className="text">
                        <h1 className='au'>About Us</h1>
                        <div className="lines"></div>
                    </div>
                </div>
                <div className="contents">
                    <p>
                        <b>
                            Welcome to NXT LVL, where our passion for cars and dedication to providing exceptional service drive everything we do. Whether you’re looking to enhance your vehicle’s performance with premium accessories or seeking a reliable rental for your next adventure, we've got you covered.
                        </b>
                    </p>
                    <p>
                        <b>Our Mission:</b>
                        <ul>
                            <li>To elevate your driving experience through top-quality car accessories and dependable rental services.</li>
                            <li>We believe every journey should be enjoyable, comfortable, and stress-free.</li>
                            <li>We offer a curated selection of products and rentals designed to meet the highest standards of quality and performance.</li>
                        </ul>
                    </p>
                   
                    <p>
                        <b>Why Choose Us?</b>
                        <ul>
                            <li><b>Expertise:</b> Our team comprises automotive enthusiasts and experts who are committed to helping you find the right products and services for your needs.</li>
                            <li><b>Quality:</b> We prioritize quality and reliability, ensuring that all our accessories and rental vehicles meet rigorous standards.</li>
                            <li><b>Customer Focus:</b> Your satisfaction is our top priority. We strive to provide exceptional service and support to make your experience with us seamless and enjoyable.</li>
                        </ul>
                    </p>
                   
                    <p>
                        <b>Thank you for choosing NXT LVL. We look forward to being part of your journey!</b>
                    </p>
                    
                </div>
                
            </div>
            
        </div>
        // {/* <Footer/> */}
        
    );
};

export default AboutUs;


//aboutus.jsx