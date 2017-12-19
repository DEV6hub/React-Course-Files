import React, { Component } from 'react';
import './Shipping.css';

class Shipping extends Component {
  constructor() {
    super();

    this.state = {
      firstName: 'first',
      lastName: 'last',
      email: 'rod@dev6.com',
      phone: '9068977790',
      address: '4 Robert Speck Pkwy',
      city: 'Mississauga',
      country: '',
      region: '',
      zipPostCode: 'L4Z 1S1',
      specialInstructions: 'nothing special required'
    };
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Personal Information</legend>

          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            required
            placeholder="First Name"
            value={this.state.firstName}
          />

          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            required
            placeholder="Last Name"
            value={this.state.lastName}
          />

          <label htmlFor="email">Email Address: </label>
          <input
            type="email"
            id="email"
            required
            placeholder="you@company.com"
            minLength="6"
            value={this.state.email}
          />

          <label htmlFor="phone">Phone Number (416-555-6789): </label>
          <input
            type="tel"
            id="phone"
            pattern="[0-9]{3}[ -.]?[0-9]{3}[ -.]?[0-9]{4}"
            required
            minLength="10"
            maxLength="12"
            placeholder="416-555-6789"
            title="10 digits with optional dash, dot, or space separator"
            value={this.state.phone}
          />
        </fieldset>

        <fieldset>
          <legend>Shipping Address</legend>

          <label htmlFor="address">Street Address:</label>
          <input
            type="text"
            required
            id="address"
            placeholder="123 Main St."
            value={this.state.address}
          />

          <label htmlFor="city">City: </label>
          <input
            type="text"
            required
            id="city"
            placeholder="City"
            value={this.state.city}
          />

          <label htmlFor="country">Country: </label>
          <select id="country" value={this.state.country}>
            <option value="">Select a country</option>
          </select>

          <label htmlFor="region">Province/State: </label>
          <select id="region" value={this.state.region}>
            <option value="">Select a region</option>
          </select>

          <label htmlFor="zipPostCode">Postal/Zip Code: </label>
          <input type="text" id="zipPostCode" value={this.state.zipPostCode} />
        </fieldset>

        <fieldset>
          <legend>Special Instructions</legend>
          <textarea
            id="specialInstructions"
            rows="3"
            placeholder="Anything we should know about?"
            value={this.state.specialInstructions}
          />
        </fieldset>

        <br />
        <button type="submit">Complete Order</button>
      </form>
    );
  }
}

export default Shipping;
