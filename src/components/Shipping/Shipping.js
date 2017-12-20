import React, { Component } from 'react';
import './Shipping.css';
import { countries, regions } from './CountriesAndRegions';
import { FormWithConstraints } from 'react-form-with-constraints';

class Shipping extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      country: '',
      region: '',
      zipPostCode: '',
      specialInstructions: ''
    };
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    // temporarily disable the following lines while testing the form validation code
    // this.props.createOrder(this.state);
    // this.props.history.push('/thanks');
  }

  handleChange = event => {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value });
  };

  render() {
    let regionsForSelectedCountry = regions[this.state.country];
    let provStateLabel = 'Region';
    let postalZipProps = {};
    switch (this.state.country) {
      case 'canada':
        provStateLabel = 'Province';
        postalZipProps = {
          label: 'Postal Code (A0A 0A0 or A0A0A0)',
          minLength: 6,
          maxLength: 7,
          regex: '([A-Za-z][0-9][A-Za-z]\\s?[0-9][A-Za-z][0-9])',
          title: 'Please provide a Canadian postal code (space is optional)',
          placeholder: 'A0A 0A0 or A0A0A0'
        };
        break;
      case 'usa':
        provStateLabel = 'State';
        postalZipProps = {
          label: 'Zip Code (12345 or 12345-1234)',
          minLength: 5,
          maxLength: 10,
          regex: '([0-9]{5}([-][0-9]{4})?)',
          title: 'Please provide a 5-digit or 9-digit US zip code',
          placeholder: '12345 or 12345-1234'
        };
        break;
      default:
        postalZipProps = {
          label: 'Postal/Zip Code',
          minLength: 0,
          maxLength: 0,
          regex: '',
          title: '',
          placeholder: ''
        };
        break;
    }

    return (
      <FormWithConstraints onSubmit={this.handleSubmit} noValidate>
        <fieldset>
          <legend>Personal Information</legend>

          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            required
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />

          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            required
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />

          <label htmlFor="email">Email Address: </label>
          <input
            type="email"
            id="email"
            required
            placeholder="you@company.com"
            minLength="6"
            value={this.state.email}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          />

          <label htmlFor="city">City: </label>
          <input
            type="text"
            required
            id="city"
            placeholder="City"
            value={this.state.city}
            onChange={this.handleChange}
          />

          <label htmlFor="country">Country: </label>
          <select
            id="country"
            value={this.state.country}
            onChange={this.handleChange}
            required
          >
            <option value="">Select a country</option>
            {countries.map(country => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>

          <label htmlFor="region">{provStateLabel}: </label>
          <select
            id="region"
            value={this.state.region}
            onChange={this.handleChange}
            required
          >
            <option value="">Select a {provStateLabel.toLowerCase()}</option>
            {regionsForSelectedCountry && regionsForSelectedCountry.length > 0
              ? regionsForSelectedCountry.map(region => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))
              : null}
          </select>

          <label htmlFor="zipPostCode">{postalZipProps.label}: </label>
          <input
            type="text"
            id="zipPostCode"
            value={this.state.zipPostCode}
            onChange={this.handleChange}
            required
            pattern={postalZipProps.regex}
            minLength={postalZipProps.minLength}
            maxLength={postalZipProps.maxLength}
            placeholder={postalZipProps.placeholder}
            title={postalZipProps.title}
          />
        </fieldset>

        <fieldset>
          <legend>Special Instructions</legend>
          <textarea
            id="specialInstructions"
            rows="3"
            placeholder="Anything we should know about?"
            value={this.state.specialInstructions}
            onChange={this.handleChange}
          />
        </fieldset>

        <br />
        <button type="submit">Complete Order</button>
      </FormWithConstraints>
    );
  }
}

export default Shipping;
