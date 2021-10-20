import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css";
const Service = (props) => {
    const {id, img, description, name}= props.service;
    return (
        <div>
            <Col>
                <Card className="card-design">
                    <Card.Img variant="top" className="card-img" src={img} />
                    <Card.Body>
                        <Card.Title className="card-title">{name}</Card.Title>
                        <Card.Text className="card-text">
                            <p>{description}</p>
                        </Card.Text>
                        <Link to={`/service/${id}`}>
                        <Button className="button-design">Read More</Button>{' '}
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;