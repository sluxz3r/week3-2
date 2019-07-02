import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Modal1 from './components/Modal';
import Flex from './components/Flex';
import './App.css';


class App extends Component {

  render() {
    return (
      <div>
      <Navbar />
      <Search />
      <Modal1 />
      <Flex />
      
       

      </div>
    );
  }
}

export default App;
