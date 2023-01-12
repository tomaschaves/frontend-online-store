import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductDetails extends Component {
  getSavedProducts = () => { // função para pegar do local storage os produtos
    const cartProducts = localStorage.getItem('products');
    return cartProducts ? JSON.parse(cartProducts) : [];
  };

  saveProduct = (title, thumbnail, price, id) => {
    const cartProducts = this.getSavedProducts(); // pegando do local storage os produtos com a função
    // se o id já existir, vamos aumentar o qtd, se não existir, vamos setar em 1 e aumentar a quantidade de produtos no carrinho
    const has = cartProducts.some((element) => element.id === id); // vemos se se já existe o produto no carrinho
    if (has) { // se existe, aumentamos a qtd em 1
      const existingProduct = cartProducts.map((element) => {
        if (element.id === id) {
          element.qtd += 1;
        }
        return element;
      });
      localStorage.setItem('products', JSON.stringify(existingProduct));
    } else { // se não existe, setamos a quantidade em 1
      const newCartProducts = [...cartProducts, {
        title,
        thumbnail,
        price,
        id,
        qtd: 1,
      }];
      localStorage.setItem('products', JSON.stringify(newCartProducts));
    }
  };

  render() {
    const { location: { state: { title, thumbnail, price, id } }, history } = this.props;
    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <h2 data-testid="product-detail-price">{price}</h2>
        <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
        <button
          type="button"
          data-testid="shopping-cart-button"
          onClick={ () => history.push('/cart') }
        >
          Carrinho
        </button>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.saveProduct(title, thumbnail, price, id) }
        >
          Adicionar ao carrinho
        </button>

      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.string,
    }),
  }),
}.isRequired;
