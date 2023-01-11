import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductsList extends Component {
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
