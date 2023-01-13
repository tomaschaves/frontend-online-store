import React, { Component } from 'react';

class ShoppingCart extends Component {
  state = {
    cartProducts: [],
  };

  componentDidMount() {
    this.getState();
  }

  getState = () => {
    this.setState({
      cartProducts: this.getSavedProducts(),
    });
  };

  getSavedProducts = () => {
    const cartProducts = localStorage.getItem('products');
    return cartProducts ? JSON.parse(cartProducts) : [];
  };

  addAndRemoveProducts = (id, operation, qtd) => {
    const cartProducts = this.getSavedProducts();
    const existingProduct = cartProducts.map((element) => {
      if (element.id === id && operation === 'plus') {
        element.qtd += 1;
      } else if (element.id === id && operation === 'minus' && qtd > 1) {
        element.qtd -= 1;
      }
      return element;
    });
    localStorage.setItem('products', JSON.stringify(existingProduct));
    this.getState();
  };

  deleteItem = (id) => {
    const cartProducts = this.getSavedProducts();
    const filterElement = cartProducts.filter((element) => element.id !== id);
    localStorage.setItem('products', JSON.stringify(filterElement));
    this.getState();
  };

  render() {
    const { cartProducts } = this.state;
    return (
      <div>
        <button
          type="button"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </button>
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
                <button
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ () => this.addAndRemoveProducts(id, 'plus', qtd) }
                >
                  +
                </button>
                <p data-testid="shopping-cart-product-quantity">{ qtd }</p>
                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ () => this.addAndRemoveProducts(id, 'minus', qtd) }
                >
                  -
                </button>
                <button
                  type="button"
                  data-testid="remove-product"
                  onClick={ () => this.deleteItem(id) }
                >
                  Remover

                </button>
              </div>
            ))
          )
        }
      </div>
    );
  }
}

export default ShoppingCart;
