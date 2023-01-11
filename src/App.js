import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import CategoriesList from './components/CategoriesList';
import ProductsList from './components/ProductsList';
import ShoppingCart from './components/ShoppingCart';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductsList } />
          <Route exact path="/cart" component={ ShoppingCart } />
          {/* <Route exact path="/categories" component={ CategoriesList } /> */}
        </Switch>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        {/* <Link to="/categories" data-testid="shopping-cart-button">Categorias</Link> */}
        <CategoriesList />
      </BrowserRouter>
    );
  }
}

export default App;
