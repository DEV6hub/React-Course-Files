import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ConfigButtonBar.css';
import { COLORS, SIZES, STYLES, LOGOS } from '../../model/ShirtModel';

class ConfigButtonBar extends Component {
  render = props => (
    <div>
      <div>
        <div
          onClick={() => this.props.updateColor(COLORS.RED)}
          style={Object.assign({}, styles.colorPickerBtn, styles.red)}
        />
        <div
          onClick={() => this.props.updateColor(COLORS.BLUE)}
          style={Object.assign({}, styles.colorPickerBtn, styles.blue)}
        />
        <div
          onClick={() => this.props.updateColor(COLORS.BLACK)}
          style={Object.assign({}, styles.colorPickerBtn, styles.black)}
        />
        <div
          onClick={() => this.props.updateColor(COLORS.WHITE)}
          style={Object.assign({}, styles.colorPickerBtn, styles.white)}
        />
      </div>

      <div>
        <img
          src={logoCool}
          alt="logo cool"
          style={{ height: logoDimensions, width: logoDimensions }}
          onClick={() => this.props.updateLogo(LOGOS.COOL)}
        />
        <img
          src={logoWorried}
          alt="logo worried"
          style={{ height: logoDimensions, width: logoDimensions }}
          onClick={() => this.props.updateLogo(LOGOS.WORRIED)}
        />
        <img
          src={logoLaughing}
          alt="logo laughing"
          style={{ height: logoDimensions, width: logoDimensions }}
          onClick={() => this.props.updateLogo(LOGOS.LAUGHING)}
        />
      </div>

      <div>
        <button onClick={() => this.props.updateSize(SIZES.SMALL)}>
          {SIZES.SMALL}
        </button>
        <button onClick={() => this.props.updateSize(SIZES.MEDIUM)}>
          {SIZES.MEDIUM}
        </button>
        <button onClick={() => this.props.updateSize(SIZES.LARGE)}>
          {SIZES.LARGE}
        </button>
      </div>

      <div>
        <button onClick={() => this.props.updateStyle(STYLES.MEN)}>
          {STYLES.MEN}
        </button>
        <button onClick={() => this.props.updateStyle(STYLES.WOMEN)}>
          {STYLES.WOMEN}
        </button>
      </div>
    </div>
  );
}

const logoCool = require('../../images/logo-cool.png');
const logoWorried = require('../../images/logo-worried.png');
const logoLaughing = require('../../images/logo-laughing.png');
const logoDimensions = 50;

const styles = {
  colorPickerBtn: {
    margin: '1px',
    minWidth: '30px',
    minHeight: '30px',
    maxWidth: '30px',
    maxHeight: '30px',
    border: '1px solid black'
  },
  red: {
    backgroundColor: COLORS.RED
  },
  blue: {
    backgroundColor: COLORS.BLUE
  },
  black: {
    backgroundColor: COLORS.BLACK
  },
  white: {
    backgroundColor: COLORS.WHITE
  }
};

ConfigButtonBar.propTypes = {
  updateColor: PropTypes.func.isRequired,
  updateStyle: PropTypes.func.isRequired,
  updateSize: PropTypes.func.isRequired,
  updateLogo: PropTypes.func.isRequired
};
ConfigButtonBar.defaultProps = {
  updateColor: null,
  updateStyle: null,
  updateSize: null,
  updateCaption: null
};

export default ConfigButtonBar;
