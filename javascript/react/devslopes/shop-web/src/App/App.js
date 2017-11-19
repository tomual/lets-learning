import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from '../Product/Product';
import Wishlist from '../Wishlist/Wishlist';
import HttpService from '../services/http-service'

const http = new HttpService();

class App extends Component {

  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);

    this.state = {products:[]};

    this.loadData();
  }

  loadData = () => {
    var self = this;
    http.getProducts().then(data => {
      self.setState({products: data});
    }, error => {

    });
  }

  productList = () => {
    const list = this.state.products.map((product) =>
      <div className="col-sm-4" key={product._id}>
        <Product product={product} />
      </div>
    );

    return (list);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container-fluid App-main">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
                {this.productList()}
              </div>
            </div>
            <div className="col-sm-4">
              <Wishlist />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
