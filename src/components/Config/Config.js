import React, { Component } from 'react';
import './Config.css';
import Shirt from '../../components/Shirt/Shirt';
import ShirtModel, {
  SIZES,
  STYLES,
  COLORS,
  LOGOS
} from './../../model/ShirtModel';
import ConfigButtonBar from './ConfigButtonBar';
import ShopBar from './ShopBar';
import store from 'store';
import { guid } from './../../utils/utils';

class Config extends Component {
  constructor(props) {
    super(props);
    this.saveHandler = this.saveHandler.bind(this);
    this.newHandler = this.newHandler.bind(this);
    this.addToCartHandler = this.addToCartHandler.bind(this);

    this.updateColor = this.updateColor.bind(this);
    this.updateStyle = this.updateStyle.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateLogo = this.updateLogo.bind(this);

    let shirts = store.get('shirts') || {};
    this.shirt = shirts[this.props.shirtId] || this.makeNewShirt();
  }

  makeNewShirt() {
    return new ShirtModel(
      guid(),
      SIZES.SMALL,
      STYLES.MEN,
      LOGOS.PLACEHOLDER,
      COLORS.NONE
    );
  }

  saveHandler = () => {};
  newHandler = () => {};
  addToCartHandler = () => {};

  updateColor = newColor => {};

  updateStyle = newStyle => {};

  updateSize = newSize => {};

  updateLogo = newLogo => {};

  updateShirt = updatedShirt => {};

  render() {
    return (
      <div className="configBody">
        <ConfigButtonBar
          updateColor={this.updateColor}
          updateSize={this.updateSize}
          updateLogo={this.updateLogo}
          updateStyle={this.updateStyle}
        />
        <ShopBar
          saveHandler={this.saveHandler}
          newHandler={this.newHandler}
          addToCartHandler={this.addToCartHandler}
        />
        <Shirt shirt={this.shirt} />
      </div>
    );
  }
}

export default Config;
