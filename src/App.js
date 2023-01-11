import React, { Component } from 'react';
import './App.css';
import ProductsList from './components/ProductsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductsList />
      </div>
    );
  }
}

export default App;
