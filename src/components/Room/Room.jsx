import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaBed, FaDollarSign, FaFemale } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Room = ({ room }) => {
    const { title, description, imgUrl,bed,capacity,bedType,price } = room;
    // console.log(room);
    return (


        <Col>
            <Card>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between'>
                    <div>
                    <FaBed></FaBed> {bed}
                    </div>
                    <div>
                        <FaFemale></FaFemale>{capacity}
                    </div>
                    <div>
                        <FaDollarSign></FaDollarSign>{price}
                    </div>

                    <Link to='/book'><Button className='btn-primary'>Book</Button></Link>
                </Card.Footer>
            </Card>
        </Col>





    );
};

export default Room;