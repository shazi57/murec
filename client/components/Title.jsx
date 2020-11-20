import React from 'react';
import { Row, Col } from 'react-bootstrap';
import djbox from '../styles/assets/djbox.gif';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import '../styles/title.css';

const Title = () => {
  const wow = 'wow';
  return (
    <Col>
      <Row className="title-container">
        <h1 className="title">MUREK</h1>
        <img className="djbox" src={djbox} alt="loading..." />
      </Row>
      <Row className="subtitle">LEMME DJ YOU RIGHT</Row>
      <Row className="button-container">
        <IconButton>
          <ArrowDropDownCircleIcon className="dropdownbutton" />
        </IconButton>
      </Row>
    </Col>
  );
};

export default Title;
