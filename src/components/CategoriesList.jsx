import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import SearchHelper from './SearchHelper';

class CategoriesList extends Component {
  state = {
    categories: [],
    results: [],
  };

  componentDidMount() {
    getCategories()
      .then((categories) => { this.setState({ categories }); });
  }

  // outra maneira
  // componentDidMount() {
  //   this.list();
  // }

  // list = async () => {
  //   const listing = await getCategories();
  //   this.setState({
  //     categories: listing,
  //   });
  // };

  handleClick = ({ target }) => {
    getProductsFromCategoryAndQuery(target.id, '')
      .then((results) => this.setState({
        results,
        // click: true, // ler comentário em ProductList.jsx
      }));
  };

  render() {
    const { categories, results } = this.state;
    return (
      <div>
        <p>
          Categorias
        </p>
        <aside>
          {
            categories.map(({ id, name }) => (
              <label htmlFor={ id } key={ id } data-testid="category">
                <input
                  type="radio"
                  id={ id }
                  value={ id }
                  name="category"
                  onClick={ this.handleClick }
                />
                { name }
              </label>
            ))
          }
          <SearchHelper
            list={ results.results }
          />
        </aside>
      </div>
    );
  }
}

export default CategoriesList;
