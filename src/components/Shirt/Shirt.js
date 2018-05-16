import React, { Component } from 'react';
import './Shirt.css';
import { Container, Row, Col, Card } from 'reactstrap';

class Shirt extends Component {
    render() {
        return (
            <Card className="text-center">
                <img className="img-fluid" src={require(`../../images/${this.props.shirt.image}`)} alt="Shirt" />
                <h4 className="card-title">{this.props.shirt.name}</h4>
                <p className="description">{this.props.shirt.description}</p>
                <Container>
                    <Row className="btn-row">
                        <Col className="icon-basket" xs="2"></Col>
                        <Col className="text" xs="8">
                            <strong>${this.props.shirt.price}</strong>
                        </Col>
                        <Col className="icon-edit" xs="2"></Col>
                    </Row>
                </Container>
            </Card>
        )
    }

}

export default Shirt;