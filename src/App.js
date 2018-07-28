import React from 'react';
import HeaderMain from './components/HeaderMain.js' 
import NavBar from './components/NavBar.js'
import TypeMain from './components/TypesMain.js';
import Slider from './components/SliderMain.js'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <HeaderMain />
        <TypeMain />
        <Slider />
      </div>
    );
  }
}

export default App;
