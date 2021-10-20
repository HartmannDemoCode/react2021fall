//npm install react-bootstrap@next bootstrap@5.1.1
import { Form, Row, Col, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import utils from '../utils';
export default (props) => {
    const emptyState = { email: "", password: "", address1: "", address2: "", city: "", country: null, zip: "", checkMe: false, checkMeStyled: false, department: "" };
    const [state, setState] = useState(emptyState);

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
        if (state.email && state.password && state.address && state.address2 && state.city && state.department) {
            console.log('Got It', state);
        }
        else {
            console.log('Missed it', state);
        }
        utils.fetchAny(URL, (response)=>{console.log(response);}, 'POST', state);
        setState(emptyState);
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={state.email} placeholder="Enter email" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={state.password} placeholder="Password" onChange={handleChange} />
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters.
                        </Form.Text>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="address1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control value={state.address1} placeholder="1234 Main St" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control value={state.address2} placeholder="Apartment, studio, or floor" onChange={handleChange} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control value={state.city} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Select value={state.country} defaultValue="Choose..." onChange={handleChange}>
                            <option>Choose...</option>
                            {['Albany', 'Belarus', 'China', 'Denmark'].map(country => <option>{country}</option>)}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="zip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control value={state.zip} onChange={handleChange} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="checkMe">
                    <Form.Check type="checkbox" label="Check me out" selected={state.checkMe} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="checkMeStyled">
                    <Form.Check onChange={handleChange}
                        // disabled
                        type="switch" //a styled checkbox
                        label="switch that can be disabled"
                        selected={state.checkMeStyled}
                        
                    />
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                            Department
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check onChange={handleChange}
                                type="radio"
                                label="IT"
                                name="department"
                                id="IT"
                            />
                            <Form.Check onChange={handleChange}
                                type="radio"
                                label="Sales"
                                name="department"
                                id="sales"
                            />
                            <Form.Check onChange={handleChange}
                                type="radio"
                                label="Marketing"
                                name="department"
                                id="marketing"
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>);
};