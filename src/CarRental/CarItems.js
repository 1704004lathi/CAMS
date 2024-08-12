import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import './CarItems.css';
import Navigation from "../Nav/Navigation";

const CarItems = (props) => {
  const { imgUrl, model, carName, automatic, speed, price, rating, description, gps, seatType, brand } = props.item;
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate('/BookingForm'); // Adjust the route as needed
  };

  return (
    <div>
      <Navigation />
    <section>
      
      <Container className="cis">
        <Row>
          <Col lg="6">
            <img src={imgUrl} alt="" className="w-100" />
          </Col>
          <Col lg="6">
            <div className="car__info">
              <h2 className="section__title">{carName}</h2>
              <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                <h6 className="rent__price fw-bold fs-4">
                  Rs.{price}.00 / Day
                </h6>
                <span className="d-flex align-items-center gap-2">
                  <span style={{ color: "#f9a826" }}>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                  </span>
                  ({rating} ratings)
                </span>
              </div>
              <p className="section__description">
                {description}
              </p>
              <div className="d-flex align-items-center mt-3" style={{ columnGap: "4rem" }}>
                <span className="d-flex align-items-center gap-1 section__description">
                  <i className="ri-roadster-line" style={{ color: "#f9a826" }}></i>{" "}
                  {model}
                </span>
                <span className="d-flex align-items-center gap-1 section__description">
                  <i className="ri-settings-2-line" style={{ color: "#f9a826" }}></i>{" "}
                  {automatic}
                </span>
                <span className="d-flex align-items-center gap-1 section__description">
                  <i className="ri-timer-flash-line" style={{ color: "#f9a826" }}></i>{" "}
                  {speed}
                </span>
              </div>
              <div className="d-flex align-items-center mt-3" style={{ columnGap: "2.8rem" }}>
                <span className="d-flex align-items-center gap-1 section__description">
                  <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                  {gps}
                </span>
                <span className="d-flex align-items-center gap-1 section__description">
                  <i className="ri-wheelchair-line" style={{ color: "#f9a826" }}></i>{" "}
                  {seatType}
                </span>
                <span className="d-flex align-items-center gap-1 section__description">
                  <i className="ri-building-2-line" style={{ color: "#f9a826" }}></i>{" "}
                  {brand}
                </span>
              </div>
              {/* Add the Book Now button */}
              <button className="carbtbnb" onClick={handleBookNowClick}>
                Book Now
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  );
};

export default CarItems;
