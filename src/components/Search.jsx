import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import SearchHelper from './SearchHelper';

class Search extends Component {
  state = {
    product: '',
    results: [],
    click: false,
  };

  handleClick = (event) => {
    event.preventDefault();
    const { product } = this.state;
    getProductsFromCategoryAndQuery('', product)
      .then((results) => this.setState({
        results,
        click: true, // ler comentário em ProductList.jsx
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
        <SearchHelper
          list={ results.results }
          click={ click }
        />
      </div>
    );
  }
}

export default Search;
