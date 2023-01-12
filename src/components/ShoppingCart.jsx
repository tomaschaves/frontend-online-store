import React, { Component } from 'react';

class ShoppingCart extends Component {
  state = {
    cartProducts: [],
  };

  componentDidMount() {
    this.setState({
      cartProducts: this.getSavedProducts(),
    });
  }

  getSavedProducts = () => {
    const cartProducts = localStorage.getItem('products');
    return cartProducts ? JSON.parse(cartProducts) : [];
  };

  render() {
    const { cartProducts } = this.state;
    return (
      <div>
        {
          (!cartProducts || cartProducts.length === 0) ? (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>
          ) : (
            cartProducts.map(({ id, title, price, thumbnail, qtd }) => (
              <div key={ id }>
                <h1 data-testid="shopping-cart-product-name">{ title }</h1>
                <h2>{ price }</h2>
                <img src={ thumbnail } alt={ title } />
                <p data-testid="shopping-cart-product-quantity">{ qtd }</p>
              </div>
            ))
          )
        }
      </div>
    );
  }
}

export default ShoppingCart;
