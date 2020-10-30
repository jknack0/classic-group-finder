import React, { useEffect } from 'react';
import { BrowserRouter as  Router } from 'react-router-dom'
import Routes from './Routes'
import backgroundImage from '../../images/cgf-bg.jpg'
import './App.css';
import GroupFinder from '../GroupFinder';


const App = () => {
  // I hate this
  const appStyle = {
    backgroundImage: "url(" + backgroundImage + ")",
    backgroundSize: '100vw 100vh',
    backgroundRepeat: 'no-repeat'
  }

  useEffect(() => {
    
  }, [])

  return (
    <div className='app' style={appStyle}>
      <GroupFinder>
        <Router>
          <Routes />
        </Router>
      </GroupFinder>  
    </div>
  )
}

export default App;
