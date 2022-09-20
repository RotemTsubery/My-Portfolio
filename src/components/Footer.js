import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon5 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/rotem-tsubery-552a7422a"><img src={navIcon1} alt="my-linkedin" /></a>
                <a href="https://github.com/RotemTsubery"><img src={navIcon5} alt="my-github" /></a>
                <a href="https://www.instagram.com/rotemtsubery/"><img src={navIcon3} alt="my-instagram" /></a>
                <a href="https://api.whatsapp.com/send?phone=972528223155&text=Hi!%20"><img src={navIcon4} alt="my-whatsapp" /></a>
                
            </div>
            <p>Copyright 2022. All Rights Reserved to RotemTsubery</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
