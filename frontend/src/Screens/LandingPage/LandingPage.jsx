import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./Ladingpage.css";
const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div className="title">
              <h1 className="title">Welcome to NoteZipper</h1>
              <p className="subtitle">One safe place for all your notes...</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">Login</Button>
              </a>
              <a href="/register">
                <Button size="lg" className="landingbutton" variant="outline-primary">SignUp</Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
