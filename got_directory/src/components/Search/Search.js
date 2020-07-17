import React from "react";
import {Form, Col} from 'react-bootstrap';

const Search = ({ search, handleInputChange }) =>{
    return (
        <Form>
            <Form.Row className="align-items-center">
                <Col xs="auto">
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
    )
}

export default Search;