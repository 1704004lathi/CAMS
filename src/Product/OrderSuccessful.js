import React from 'react';
import { Link } from 'react-router-dom';
import './OrderSuccessful.css'; // Import scoped CSS Module
import Navigation from '../Nav/Navigation';
const OrderSuccessful = () => {
    return (
        <div>
            <Navigation />
        <div className="ordersuccess-container">
            <img src="https://th.bing.com/th/id/OIP.JaJr2YVsxBPQYs2KPgadowHaEZ?pid=ImgDet&rs=1" alt="Successfully added to your cart" className="ordersuccess-image" />

            <div className="ordersuccess-about-the-purchase">
                <header className="ordersuccess-header">Order Placed Successfully !</header>
                <div className="ordersuccess-first-detail">
                    <strong className="ordersuccess-strong">Order ID:</strong> JDH6DJHF <br />
                </div>
                <div className="ordersuccess-second-detail">
                    <strong className="ordersuccess-strong">Payment Method:</strong> Visa <br />
                </div>
                <Link to="/" className="ordersuccess-button ordersuccess-home-button">Return Home</Link>
            </div>

            <section className="ordersuccess-suggestions">Suggestions</section>

            <div className="ordersuccess-suggestions-container">
                <div className="ordersuccess-suggestion-item">
                    <img src="https://i5.walmartimages.com/asr/aa768187-b844-4014-ba29-dd3a668748f8_1.086bbc75433876a75cf3e31158ec181e.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff" />
                    <br />
                    Pioneer Bass boosted <br /> Speakers
                    <div className="ordersuccess-price">INR : 30000</div>
                </div>

                <div className="ordersuccess-suggestion-item">
                    <img src="https://m.media-amazon.com/images/I/51LnGAR9h6L.SL500.jpg" />
                    <br />
                    Mobile Holder for Car Universal
                    <div className="ordersuccess-price">INR : 400</div>
                </div>

                <div className="ordersuccess-suggestion-item">
                    <img src="https://m.media-amazon.com/images/I/71PJ-S60haL.AC_SL1500.jpg" />
                    <br />
                    1080p 360 deg cam for car <br /> Universal
                    <div className="ordersuccess-price">INR : 16,200</div>
                </div>

                <div className="ordersuccess-suggestion-item">
                    <img src="https://th.bing.com/th/id/OIP.dJm8ud7H78eprpFzx7Tp1wHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Bose SoundLink Mini II Special Edition" />
                    <br />
                    Steering cover for car
                    <div className="ordersuccess-price">INR : 3000</div>
                </div>

                <div className="ordersuccess-suggestion-item">
                    <img src="https://th.bing.com/th/id/OIP.aFgF8x9fYJRUn7ZbbsdQRwHaHa?w=600&h=600&rs=1&pid=ImgDetMain" />
                    <br />
                    Rim Cover for car <br /> Universal
                    <div className="ordersuccess-price">INR : 1600</div>
                </div>

                <div className="ordersuccess-suggestion-item">
                    <img src="https://i5.walmartimages.com/asr/02422501-10cf-43c4-b1f5-a953f531831c_1.09b66f2bcf650620919d4d7175ce30c4.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff" />
                    <br />
                    Car tyre Inflator Universal
                    <div className="ordersuccess-price">INR : 2000</div>
                </div>
            </div>

            <hr className="ordersuccess-hr" />
        </div>
        </div>
    );
};

export default OrderSuccessful;
