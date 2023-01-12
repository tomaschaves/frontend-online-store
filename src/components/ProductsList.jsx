import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductsList extends Component {
  getSavedProducts = () => {
    const cartProducts = localStorage.getItem('products');
    return cartProducts ? JSON.parse(cartProducts) : [];
  };

  saveProduct = (title, thumbnail, price, id) => {
    const cartProducts = this.getSavedProducts();
    // se o id já existir, vamos aumentar o qtd, se não existir, vamos setar em 1 e aumentar a quantidade de produtos no carrinho
    const has = cartProducts.some((element) => element.id === id);
    if (has) {
      const existingProduct = cartProducts.map((element) => {
        if (element.id === id) {
          element.qtd += 1;
        }
        return element;
      });
      localStorage.setItem('products', JSON.stringify(existingProduct));
    } else {
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
    const { list, click } = this.props; // Click é uma variável para vermos se já buscamos alguma vez. Caso afirmativo, o texto 'Nenhum produto foi encontrado' será renderizado quando não tiver resultados. Caso contrário, ao acabar de entrar na página, mesmo tendo um array de respostas vazio, ele não será renderizado, pois não terá sido feita nenhuma pesquisa.

    return (
      <div>
        { (list === undefined || list.length === 0)
          ? click && 'Nenhum produto foi encontrado'
          : list.map(({ title, thumbnail, price, id }) => (
            <div key={ id } data-testid="product">
              <p>{ title }</p>
              <p>{ price }</p>
              <img src={ thumbnail } alt={ title } />
              <Link
                to={ { pathname: `/${id}`,
                  state: { title, thumbnail, price, id } } }
                data-testid="product-detail-link"
              >
                Detalhes
              </Link>
              <button
                type="button"
                onClick={ () => this.saveProduct(title, thumbnail, price, id) }
                data-testid="product-add-to-cart"
              >
                Adicionar ao carrinho
              </button>
            </div>
          )) }
      </div>
    );
  }
}
ProductsList.propTypes = {
  list: PropTypes.string,
}.isRequired;
export default ProductsList;
