import React, { Component } from 'react';
import { getCategories } from '../services/api';

class CategoriesList extends Component {
  state = {
    categories: [],
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

  render() {
    const { categories } = this.state;

    return (
      <div>
        <p>
          Categorias
        </p>
        <aside>
          {
            categories.map(({ id, name }) => (
              <label htmlFor={ id } key={ id } data-testid="category">
                <input type="radio" id={ id } value={ id } name="category" />
                { name }
              </label>
            ))
          }
        </aside>
      </div>
    );
  }
}

export default CategoriesList;
