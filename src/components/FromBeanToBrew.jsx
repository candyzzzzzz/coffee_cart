import { Container, Row, Col } from "react-bootstrap";
import OurStoryImg from "../images/beantobrew.jpg"; // import the image

const FromBeanToBrew = () => {
  return (
    <div className="our-story-section" id="story">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src={OurStoryImg}
              alt="Coffee brewing"
              className="story-image"
              style={{
                maxWidth: "250px",
                width: "100%",
                height: "auto",
                display: "block",
                margin: "0 auto",
              }}
            />
          </Col>
          <Col md={6}>
            <h2 className="story-title">From Bean to Brew</h2>
            <p className="story-text">
              The journey of coffee begins high in the misty mountains, where
              dedicated farmers carefully nurture each coffee cherry. After
              months of growth, the ripe cherries are handpicked and processed
              to reveal the precious beans within. These beans are then
              sun-dried, sorted, and shipped across continents to expert
              roasters. Through the art of roasting, the beans develop their
              unique flavors and aromas, ready to be ground and brewed. In your
              favorite café, skilled baristas transform these freshly ground
              beans into a rich, aromatic cup of coffee. Every sip you take is a
              celebration of the hard work, tradition, and passion that goes
              into every stage of the journey—from the fertile soil to your
              steaming mug. At CoffeeCart, we honor this journey by sourcing our
              beans responsibly and brewing each cup with care, ensuring you
              experience the full story of coffee, from bean to brew.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FromBeanToBrew;
