import React, { Component } from 'react';
import Header from './components/Header';
import Contacts from './components/Contacts'
import AddContact from './components/AddContact'
import {Grid, Row, Col} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col>
              <AddContact />
              <Contacts />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
