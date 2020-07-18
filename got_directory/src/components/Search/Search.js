import React from "react";
import { Form, Col, Row, Container } from 'react-bootstrap';

const Search = ({ search, handleInputChange }) => {
    return (
        <Container>
            <Row>
                <Col xs={4}>
                </Col>
                <Col>
                    <Form>
                        <Form.Row className="align-items-center">
                            <Col xs={7}>
                                <Form.Label htmlFor="inlineFormInput" srOnly>
                                </Form.Label>
                                <Form.Control
                                    className="mb-2"
                                    id="inlineFormInput"
                                    placeholder="Search by house"
                                    name="search"
                                    value={search}
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
                <Col xs={1}>
                </Col>
            </Row>
            <Row>
                <Col xs={3}>
                </Col>
                <Col xs={3}>
                    <h1>Name</h1> 
                </Col>
                <Col xs={3}>
                    <h1>House</h1> 
                </Col>
                <Col xs={3}>
                    <h1>Alias</h1> 
                </Col>
            </Row>
        </Container>
    )
}

export default Search;