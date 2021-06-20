import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'


const Historys = () => {
    return(
        <ListGroup>
  <ListGroup.Item>Historia 1</ListGroup.Item>
  <ListGroup.Item variant="primary">Historia 2</ListGroup.Item>
  <ListGroup.Item action variant="secondary">
    Historia 3
  </ListGroup.Item>
  <ListGroup.Item action variant="success">
    Historia 4
  </ListGroup.Item>
  <ListGroup.Item action variant="danger">
    Historia 5
  </ListGroup.Item>
  <ListGroup.Item action variant="warning">
    Historia 6
  </ListGroup.Item>
  <ListGroup.Item action variant="info">
    Historia 7
  </ListGroup.Item>
  <ListGroup.Item action variant="light">
    Historia 8
  </ListGroup.Item>
  <ListGroup.Item action variant="dark">
    Historia ....n
  </ListGroup.Item>
</ListGroup>


    )
}


export default  Historys;