import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Welcome = () => (
  <Container>
    <Row>
      <Col xs={12} md={12}>
        <h1>Images Gallery</h1>
      </Col>
      <Col xs={12} md={12}>
        <p>This is a simple Example</p>
        <Button variant="primary" href="https://unsplash.com" target="_blank">
          Learn More
        </Button>
      </Col>
    </Row>
  </Container>
);

export default Welcome;
