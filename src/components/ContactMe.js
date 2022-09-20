import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'myportfolioemails', form.current, '52c-JUNGqzR3SwTRk')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (

<section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Me"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Let's Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="First Name" name="userFname"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="Last Name" name="userLname"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"  placeholder="Email Address" name="user_email" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel"  placeholder="Phone No." name="user_phone"  />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6"  placeholder="Message" name="message" ></textarea>
                      <input type="submit" value="Send" />
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>

  );
};
    
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>