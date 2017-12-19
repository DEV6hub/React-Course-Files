import React, { Component } from 'react';
import './Shipping.css';

class Shipping extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <legend>Personal Information</legend>

          <label htmlFor="firstName">First Name: </label>
          <input type="text" id="firstName" required placeholder="First Name" />

          <label htmlFor="lastName">Last Name: </label>
          <input type="text" id="lastName" required placeholder="Last Name" />

          <label htmlFor="email">Email Address: </label>
          <input
            type="email"
            id="email"
            required
            placeholder="you@company.com"
            minLength="6"
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
          />
        </fieldset>

        <fieldset>
          <legend>Shipping Address</legend>

          <label htmlFor="address">Street Address:</label>
          <input type="text" required id="address" placeholder="123 Main St." />

          <label htmlFor="city">City: </label>
          <input type="text" required id="city" placeholder="City" />

          <label htmlFor="country">Country: </label>
          <select id="country">
            <option value="">Select a country</option>
          </select>

          <label htmlFor="region">Province/State: </label>
          <select id="region">
            <option value="">Select a region</option>
          </select>

          <label htmlFor="zipPostCode">Postal/Zip Code: </label>
          <input type="text" id="zipPostCode" />
        </fieldset>

        <fieldset>
          <legend>Special Instructions</legend>
          <textarea
            id="specialInstructions"
            rows="3"
            placeholder="Anything we should know about?"
          />
        </fieldset>

        <br />
        <button type="submit">Complete Order</button>
      </form>
    );
  }
}

export default Shipping;
