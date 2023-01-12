import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import CategoriesList from './components/CategoriesList';
import ProductDetails from './components/ProductDetails';
// import ProductsList from './components/ProductsList';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/cart" component={ ShoppingCart } />
          <Route
            exact
            path="/:id"
            render={ (props) => (<ProductDetails
              { ...props }
            />) }
          />
        </Switch>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <Search />
        <CategoriesList />
      </BrowserRouter>
    );
  }
}

export default App;
