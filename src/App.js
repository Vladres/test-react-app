import React from 'react';
import './App.css';
import Header from './components/Header';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

class App extends React.Component {

  render() {
    return <div>
      <Header />
      <div className="container ">
        <AddProduct />

        <ProductList />
      </div>
    </div>;
  }
}
export default App;