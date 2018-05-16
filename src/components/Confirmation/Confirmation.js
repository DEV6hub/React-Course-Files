import React, { Component } from 'react';
import './Confirmation.css';


class Confirmation extends Component {

    goToCatalog = () => {
        this.props.goToCatalog();
    }
    render() {
        return (
            <div className="confirmation-container">
                <div className="confirmation-title">Your order is complete.</div>
                <div className="text-center">
                    <button type="submit" className="primary-btn" onClick={() => { this.goToCatalog(); }}>SHOP SOME MORE</button>
                </div>
            </div>
        )
    }
}

export default Confirmation;