import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={10} sm={4}>
            {/* <h1 className="logo-chathura text-white w-7"> CJ </h1> */}
          </Col>
          <Col size={10} sm={4} className="text-center pt-5">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/chathura-janithya-60b27b249/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/chathura.janithya.9/">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/chathura_janithya_/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>

            <p> © Copyright 2023. All Rights Reserved. </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
