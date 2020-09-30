import React from 'react';
import './App.css';
import backgroundImage from '../../images/cgf-bg.jpg'

const App = () => {
  // I hate this
  const appStyle = {
    backgroundImage: "url(" + backgroundImage + ")",
    backgroundSize: '100vw 100vh',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className='app' style={appStyle}>
      App
    </div>
  )
}

export default App;
