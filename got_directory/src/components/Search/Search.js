import React, { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img: "",
            name: "",
            house: "",
            id: "",
            nickname: ""
        }
    };

    

    render() {
        return (
            <Form>
                <Form.Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInput" srOnly>
                            Search by house:
                        </Form.Label>
                        <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            placeholder="Stark"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" className="mb-2">
                            Submit
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
        )
    }
}

export default Search;