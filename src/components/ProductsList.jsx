import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductsList extends Component {
  render() {
    const { list, click } = this.props;

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
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

ProductsList.propTypes = {
  list: PropTypes.string,
}.isRequired;

export default ProductsList;
