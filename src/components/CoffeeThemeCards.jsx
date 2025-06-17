import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
const cardData = [
  {
    title: "Freshly Roasted",
    text: "Sourced ethically and roasted to perfection for a rich, bold flavor.",
    icon: "☕",
  },
  {
    title: "Sustainable Beans",
    text: "We prioritize eco-friendly farms that grow premium beans.",
    icon: "🌱",
  },
  {
    title: "Fast Delivery",
    text: "Get your favorite blends delivered to your door in no time.",
    icon: "🚚",
  },
];

const CoffeeThemeCards = () => {
  return (
    <div className="coffee-card-section">
      <Container>
        <Row>
          {cardData.map((item, index) => (
            <Col md={4} key={index}>
              <Card className="coffee-card">
                <Card.Body>
                  <div className="card-icon">{item.icon}</div>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CoffeeThemeCards;
