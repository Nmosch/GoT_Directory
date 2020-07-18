import React from "react";
import { Col, Row, Container, Image } from 'react-bootstrap';
import "./style.css";

const Card = ({ results }) => {
    return (
        <>
            <Container>
                {results.map(character => {
                    return (
                        <Row className="charRow">
                            <Col xs={3} >
                                <Image thumbnail
                                    alt={character.name}
                                    src={character.image}
                                    width="200"
                                    height="150">
                                </Image>
                            </Col >
                            <Col xs={3} >
                                <h2>{character.name}</h2>
                            </Col>
                            <Col xs={3}>
                                <h2>{character.house}</h2>
                            </Col>
                            <Col xs={3}>
                                <h2>{character.nickname}</h2>
                            </Col>
                        </Row>

                    )
                })}
            </Container>
        </>
    );
};

export default Card;