import React, { useEffect } from "react";
import { Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Navigation from "../Nav/Navigation";
import './car-item.css';

const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, speed, price } = props.item;
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('car-item-background');
    return () => {
      document.body.classList.remove('car-item-background');
    };
  }, []);

  const handleDetailsClick = () => {
    navigate('/CarDetails');
  };
  

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
        <Navigation />
    <div className="car__item">
      
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <h6 className="rent__price text-center mt-2">
            Rs.{price}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {speed}
            </span>
          </div>

          {/* <button className="w-50 car_item-btn car_btn-rent" onClick={handleRentClick}>
            Rent a Car
           
          </button> */}

          <button className="caritbtn" onClick={handleDetailsClick}>
            Details
            {/* <Link to={/cars/${carName}}>Details</Link> */}
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;