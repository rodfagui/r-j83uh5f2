import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.updateCount.bind(this)}></textarea>
        <div className="counter">{this.state.value}</div>
      </div>
    );
  }
  updateCount(event) {
    this.setState({
      value: event.target.value.length
    });
  }
}

export default App;
