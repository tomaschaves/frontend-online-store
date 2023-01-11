import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductsList from './ProductsList';

class SearchHelper extends Component {
  render() {
    const { list, click } = this.props;

    return (
      <ProductsList
        list={ list }
        click={ click }
      />
    );
  }
}

SearchHelper.propTypes = {
  list: PropTypes.string,
}.isRequired;

export default SearchHelper;
