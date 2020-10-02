import React from 'react'
import './title-bar.css'

const TitleBar = () => {
  return (
    <div className='title-bar-container'>
      <div className='title-bar-invisible'>X</div>
      <p className='title-bar-heading'>Classic Group Finder</p>
      <div className='title-bar-exit-button'>X</div>
    </div>
  )
}

export default TitleBar