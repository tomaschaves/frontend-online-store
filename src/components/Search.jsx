import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductsList from './ProductsList';

class Search extends Component {
  state = {
    product: '',
    results: [],
    click: false,
  };

  handleClick = (event) => {
    event.preventDefault();
    const { product } = this.state;
    // console.log(product);
    getProductsFromCategoryAndQuery('', product)
      .then((results) => this.setState({
        results,
        click: true,
      }));
  };

  handleChange = ({ target }) => {
    this.setState({
      product: target.value,
    });
  };

  render() {
    const { product, results, click } = this.state;

    return (
      <div>
        <form onSubmit={ this.handleClick }>
          <input
            type="text"
            data-testid="query-input"
            onChange={ this.handleChange }
            value={ product }
          />

          <button
            type="submit"
            data-testid="query-button"
            id="searchButton"
          >
            Pesquisar
          </button>
        </form>
        <ProductsList
          list={ results.results }
          click={ click }
        />
      </div>
    );
  }
}

export default Search;
