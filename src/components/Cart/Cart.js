import React, { Component } from 'react';
import './Cart.css';
import { Row, Col } from 'reactstrap';

class Cart extends Component {
    openShipping = () => {
        this.props.openShipping();
    }

    closeCart = () => {
        this.props.closeCart();
    }
    render() {
        return (
            <div>
                <div className="cart-container">
                    <Row className="cart-header">
                        <Col className="cart-title" xs="8">Shopping Cart</Col>
                        <Col className="cart-btn" xs="3" onClick={() => { this.closeCart(); }}>
                            <Row className="cart-btn-row">
                                <div className="nav-icon-basket"></div>
                                <div className="cart-count">3</div>
                            </Row>
                        </Col>
                    </Row>
                    <hr />
                    <button type="button" className="primary-btn" onClick={() => { this.openShipping(); }}>GO TO SHIPPING -></button>
                </div>
            </div>

        );
    }
}

export default Cart;