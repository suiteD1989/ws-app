import React from 'react';
import HeaderMain from './components/HeaderMain.js' 
import NavBar from './components/NavBar.js'
import TypeMain from './components/TypesMain.js';
import Slider from './components/SliderMain.js';
import FaqMain from './components/FaqMain.js';
import Contact from './components/Contact.js';
import MapComponent from './components/Map.js';
import Footer from './components/Footer.js'
import './App.css';
import scrollToComponent from 'react-scroll-to-component';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <HeaderMain />
        <TypeMain />
        <Slider />
        <FaqMain />
        <Contact />
        <MapComponent />
        <Footer />
      </div>
    );
  }
}

export default App;
