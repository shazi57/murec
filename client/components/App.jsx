import React from 'react';
import { hot } from 'react-hot-loader';
import { Container, Row, Col } from 'react-bootstrap';
import Title from './Title';
import '../styles/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wow: 'wow',
    };
  }

  render() {
    return (
      <Container className="main-container">
        <Row className="main-row">
          <Title />
        </Row>
      </Container>
    );
  }
}

export default hot(module)(App);
