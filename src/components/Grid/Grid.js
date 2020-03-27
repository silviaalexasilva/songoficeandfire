import { Col, Row} from 'react-bootstrap';
import React from "react";
import GotCard from '../GotCard';
import Container from '../Container'

<Container className="gridComponent">

<Row>
  {props.state.friends.map(friend => (
    <Col size="md-6 sm-5">
      <GotCard
        key={friend.id}
        handleClick={props.handleClick}
        handleIncrement={props.handleIncrement}
        handleReset={props.handleReset}
        handleShuffle={props.handleShuffle}
        id={friend.id}
        image={friend.image}
        name={friend.name}
      />
    </Col>
  ))}
</Row>

</Container>