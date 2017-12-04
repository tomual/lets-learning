import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar className="navbar-dark bg-dark">
        <Navbar.Header>
            <Navbar.Brand>
                Book Search
            </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Header;
