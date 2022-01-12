import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import './App.css';
import data from './data.json';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main data={data}/>
        <Footer />
      </>
    );
  }
}


// do this every time, but not the only way to do it

export default App;
