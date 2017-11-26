import React, { Component } from 'react';
import BarChart from './Components/BarChart';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [340, 12, 36, 75, 900, 99, 43, 12, 54]
    }
  }

  render() {
    return (
      <div className="App">
        <BarChart data={this.state.data} />
      </div>
    );
  }
}

export default App;
