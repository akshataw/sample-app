
import React, { Component } from 'react';
import Items from './Items';

class App extends Component {
  render() {
    const items = [
      'Thor',
      'Captain America',
      'Hulk'
    ];
    return (
      <div className="App">
        <Items items={ items } />
      </div>
    );
  }
}

export default App;
