import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from './Components/Header';
import Books from './Components/Books';
import SearchInput from './Components/SearchInput';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      text: 'Harry Potter'
    };
  }

  componentWillMount() {
    this.getBooks();
  }

  getBooks() {
    axios.request({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.text
    })
    .then((response) => {
      this.setState({books: response.data.items}, () => {
        console.log(this.state);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handleChange(text) {
    this.setState({text: text}, this.getBooks());
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12}>
              <SearchInput value={this.state.text} onChange={this.handleChange.bind(this)} />
              <Books books={this.state.books} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
