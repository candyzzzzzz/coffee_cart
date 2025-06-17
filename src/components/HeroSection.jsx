import { Container, Row, Col, Button } from "react-bootstrap";
import "../App.css";
import Imgg from "../images/hero.jpg";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h1 className="hero-title">Brewed to Perfection</h1>
            <p className="hero-subtitle">
              Discover the finest blends and freshly roasted beans, straight to
              your cup.
            </p>
            <Button className="coffee-btn me-3">Order Now</Button>
            <Button variant="outline-dark">Explore Menu</Button>
          </Col>
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img src={Imgg} alt="Coffee cup" className="hero-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
