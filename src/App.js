import React, { Component } from 'react';

import Board from './components/board/Board';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Board />
        <Footer />
      </div>
    );
  }
}

export default App;