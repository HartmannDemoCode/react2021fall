//npm install react-bootstrap@next bootstrap@5.1.1
import {Modal, Container, Row, Col, Button, Form} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

const Main = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [formModalShow, setFormModalShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch modal with grid
      </Button>
      <Button variant="primary" onClick={() => setFormModalShow(true)}>
        Launch form modal
      </Button>

      <MyModal show={modalShow} onHide={() => setModalShow(false)} />
      <FormModal show={formModalShow} onHide={() => setFormModalShow(false)} />
    </>
  );
};

const MyModal = (props) => {
    console.log('This modal uses grid for layout')
    return (
      <Modal 
      {...props} 
      aria-labelledby="contained-modal-title-vcenter" 
    // centered //Try these 2 settings out
    // fullscreen
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Using Grid in Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={8}>
                .col-xs-12 .col-md-8
              </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
            </Row>
  <hr/>
            <Row>
                {/* xs is for very small screen size (6 means 18/6 = a column takes up 1/3 of the width). md is medium to large size (4/12) means 1/3 of the space*/}
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
const FormModal = (props) => {
    console.log('This modal uses grid for layout')
    const emptyState = {'name':'','email':''};
    const [state, setState] = useState({});
    const handleChange = (evt) => {
        if(evt.target.type === 'radio'){
            setState({...state, [evt.target.name]:evt.target.id});
        }
        else if (evt.target.type === 'checkbox')
            setState({ ...state, [evt.target.id]: evt.target.checked });
        else
            setState({ ...state, [evt.target.id]: evt.target.value });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (state.email && state.name) {
            console.log('Got It', state);
        }
        else {
            console.log('Missed it', state);
        }
        // utils.fetchAny(URL, (response)=>{console.log(response);}, 'POST', state);
        setState(emptyState);
        console.log('STATE',state);
    }
    return (
      <Modal 
      {...props} 
      aria-labelledby="contained-modal-title-vcenter" 
    // centered //Try these 2 settings out
    // fullscreen
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Using Form Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
          <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={state.name} placeholder="Enter full name" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={state.email} placeholder="Enter email" onChange={handleChange} />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


  export {Main as default, MyModal, FormModal};