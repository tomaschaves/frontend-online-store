import React, { Component } from 'react';

export default class ProductDetails extends Component {
  render() {
    const card = ({ location }) => {
      const { title = 'defaultValue' } = location.state || {};
      console.log(title);
    };
    card();
    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <h2 data-testid="product-detail-price">{price}</h2>
        <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
        <button
          type="button"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </button>

      </div>
    );
  }
}
