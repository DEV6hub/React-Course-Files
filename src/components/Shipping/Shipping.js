import React, { Component } from 'react';
import './Shipping.css';
import {
  FormWithConstraints,
  FieldFeedback
} from 'react-form-with-constraints';
import {
  FieldFeedbacks,
  FormGroup,
  FormControlLabel,
  FormControlInput
} from 'react-form-with-constraints-bootstrap4';
import { countries, regions } from './CountriesAndRegions';

class Shipping extends Component {
  constructor() {
    super();
    this.updateShippingInfo = this.updateShippingInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      country: '',
      region: '',
      zipPostCode: '',
      email: '',
      phone: '',
      submitButtonDisabled: false
    };
  }

  updateShippingInfo = event => {
    const field = event.currentTarget;
    const val = field.value;
    this.shippingForm.validateFields(field);
    this.setState({
      [field.id]: val,
      submitButtonDisabled: !this.shippingForm.isValid()
    });

    if (field.id === 'country') {
      this.setState({ region: '' });
      this.setState({ zipPostCode: '' });
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    this.shippingForm.validateFields();
    this.setState({ submitButtonDisabled: !this.shippingForm.isValid() });
    if (this.shippingForm.isValid()) {
      let shippingInfo = this.state;
      // submitButtonDisabled is UI state, not data, so it should not be submitted
      delete shippingInfo.submitButtonDisabled;
      this.props.createOrder(shippingInfo);
      this.props.history.push('/thanks');
    }
  }

  render() {
    let regionsForSelectedCountry = regions[this.state.country];
    let postalZipProps = {};
    switch (this.state.country) {
      case 'canada':
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
          label: 'Code',
          minLength: 0,
          maxLength: 0,
          regex: '',
          title: '',
          placeholder: ''
        };
        break;
    }

    return (
      <FormWithConstraints
        ref={element => (this.shippingForm = element)}
        onSubmit={this.handleSubmit}
      >
        <FormGroup for="firstName">
          <FormControlLabel htmlFor="firstName">First Name: </FormControlLabel>
          <FormControlInput
            type="text"
            value={this.state[this.id]}
            onChange={this.updateShippingInfo}
            id="firstName"
            required
            placeholder="First Name"
          />
        </FormGroup>
        <FormGroup for="lastName">
          <FormControlLabel htmlFor="lastName">Last Name: </FormControlLabel>
          <FormControlInput
            type="text"
            value={this.state[this.id]}
            onChange={this.updateShippingInfo}
            id="lastName"
            required
            placeholder="Last Name"
          />
        </FormGroup>
        <FormGroup for="email">
          <FormControlLabel htmlFor="email">Email Address: </FormControlLabel>
          <FormControlInput
            type="email"
            id="email"
            value={this.state[this.id]}
            onChange={this.updateShippingInfo}
            required
            placeholder="you@company.com"
            minLength="6"
          />
          <FieldFeedbacks for="email">
            <FieldFeedback when="tooShort">Too short</FieldFeedback>
            <FieldFeedback when="*" />
          </FieldFeedbacks>
        </FormGroup>

        <FormGroup for="phone">
          <FormControlLabel htmlFor="phone">
            Phone Number (416-555-6789):{' '}
          </FormControlLabel>
          <FormControlInput
            type="tel"
            id="phone"
            pattern="[0-9]{3}[ -.]?[0-9]{3}[ -.]?[0-9]{4}"
            value={this.state[this.id]}
            onChange={this.updateShippingInfo}
            required
            minLength="10"
            maxLength="12"
            placeholder="416-555-6789"
            title="10 digits with optional dash, dot, or space separator"
          />
          <FieldFeedbacks for="phone">
            <FieldFeedback when="tooShort">Too short</FieldFeedback>
            <FieldFeedback when="*" />
          </FieldFeedbacks>
        </FormGroup>
        <FormGroup for="address">
          <FormControlLabel htmlFor="address">Address: </FormControlLabel>
          <FormControlInput
            type="text"
            value={this.state[this.id]}
            onChange={this.updateShippingInfo}
            required
            id="address"
            placeholder="123 Main St."
          />
        </FormGroup>

        <FormGroup for="city">
          <FormControlLabel htmlFor="city">City: </FormControlLabel>
          <FormControlInput
            type="text"
            value={this.state[this.id]}
            onChange={this.updateShippingInfo}
            required
            id="city"
            placeholder="City"
          />
        </FormGroup>

        <FormGroup>
          <FormControlLabel htmlFor="country">Country: </FormControlLabel>
          <select
            className="form-control"
            value={this.state[this.id]}
            onChange={this.updateShippingInfo}
            required
            id="country"
          >
            <option value="">Select a country</option>
            {countries.map(country => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          <FieldFeedbacks for="country">
            <FieldFeedback when="*" />
          </FieldFeedbacks>
        </FormGroup>

        <FormGroup>
          <FormControlLabel htmlFor="provState">
            {this.state.country === 'canada' ? 'Province' : 'State'}:{' '}
          </FormControlLabel>
          <select
            className="form-control"
            value={this.state[this.id]}
            required
            onChange={this.updateShippingInfo}
            id="region"
          >
            <option value="">
              Select a {this.state.country === 'canada' ? 'province' : 'state'}
            </option>
            {regionsForSelectedCountry && regionsForSelectedCountry.length > 0
              ? regionsForSelectedCountry.map(region => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))
              : null}
          </select>
          <FieldFeedbacks for="country">
            <FieldFeedback when="*" />
          </FieldFeedbacks>
        </FormGroup>

        <FormGroup for="zipPostCode">
          <FormControlLabel htmlFor="zipPostCode">
            {postalZipProps.label}:{' '}
          </FormControlLabel>
          <FormControlInput
            type="text"
            onChange={this.updateShippingInfo}
            id="zipPostCode"
            pattern={postalZipProps.regex}
            value={this.state[this.id]}
            required
            minLength={postalZipProps.minLength}
            maxLength={postalZipProps.maxLength}
            placeholder={postalZipProps.placeholder}
            title={postalZipProps.title}
          />
          <FieldFeedbacks for="zipPostCode">
            <FieldFeedback when="tooShort">Too short</FieldFeedback>
            <FieldFeedback when="*" />
          </FieldFeedbacks>
        </FormGroup>
        <FormGroup>
          <FormControlLabel htmlFor="specialInstructions">
            Special Instructions:
          </FormControlLabel>
          <textarea
            value={this.state[this.id]}
            onChange={this.updateShippingInfo}
            className="form-control"
            id="specialInstructions"
            rows="3"
            placeholder="Anything we should know about?"
          />
        </FormGroup>

        {/* Button remains disabled until the form is valid */}
        <button disabled={this.state.submitButtonDisabled} type="submit">
          Complete Order
        </button>
      </FormWithConstraints>
    );
  }
}

export default Shipping;
