import React from "react";
import {Link} from 'react-router-dom';
import "./Home.css";
import logo from "./logo bg removed (2).png"; // Make sure to place your logo.png in the src folder
// import Footer from '../Footer/Footer';
import Navigation from "../Nav/Navigation";

function Home() {
  return (
    <section>
      <Navigation/>
    <div className="Home">
      
      <header className="header">
      
        <div className="content">
          <div className="container hom-con">
            <h1 className="ho">Car Repairs and Rental Club</h1>
            <p className="hom">Visit us for your car service and to rent cars !</p>
            <Link to="/Login" className="highlight" >
              Book Appointment
            </Link>
          </div>
        </div>
      </header>
      {/* <Footer/> */}
      
      {/* <footer>
        <ul className="container">
          <li>
            <strong>Our Location</strong>
            <p>Kuniyamuthur Coimbatore</p>
          </li>
          <li>
            <strong>Phone</strong>
            <p>+91 1234667890</p>
          </li>
          <li>
            <strong>Email</strong>
            <p>nxtlvlautomotives@gmail.com</p>
          </li>
        </ul>
      </footer> */}
    </div>
    </section>
  );
}

export default Home;