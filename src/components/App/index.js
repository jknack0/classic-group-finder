import React from 'react';
import { BrowserRouter as  Router } from 'react-router-dom'
import Routes from './Routes'
import backgroundImage from '../../images/cgf-bg.jpg'
import './App.css';


const App = () => {
  

  // I hate this
  const appStyle = {
    backgroundImage: "url(" + backgroundImage + ")",
    backgroundSize: '100vw 100vh',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className='app' style={appStyle}>
      <Router>
        <Routes />
      </Router>
    </div>
  )
}

export default App;
