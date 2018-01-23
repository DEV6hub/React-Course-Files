import React from 'react';
import ShirtListItem from './ShirtListItem';
import './ShirtList.css';
import { Link } from 'react-router-dom';

class ShirtList extends React.Component {
  constructor() {
    super();
    this.renderShirtItem = this.renderShirtItem.bind(this);
  }
  render = props => (
    <div>
      {this.renderAddLink()}
      {Object.keys(this.props.shirts).length > 0
        ? this.renderShirts()
        : this.renderEmpty()}
    </div>
  );

  renderAddLink() {
    return <Link to="/config/new">Create a new shirt for your catalog</Link>;
  }

  renderEmpty() {
    return <div>Your catalog is empty.</div>;
  }

  renderShirts() {
    return (
      <div className="shirtListWrapper">
        {Object.keys(this.props.shirts).map(this.renderShirtItem)}
      </div>
    );
  }

  renderShirtItem(key) {
    return (
      <ShirtListItem
        key={key}
        deleteShirt={this.props.deleteShirt}
        addShirtToCart={this.props.addShirtToCart}
      />
    );
  }
}

export default ShirtList;
