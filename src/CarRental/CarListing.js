
import React from "react";
import { Container, Row, Col } from "reactstrap";
import CarItem from "./CarItem";
import carData from "./CarData";

const CarListing = () => {
  return (

      <section>
        <Container>
          <Row>
            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
  );
};

export default CarListing;

