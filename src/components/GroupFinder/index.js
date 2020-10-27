import React from 'react'
import './group-finder.css'
import TitleBar from '../TitleBar'
import Navigation from '../Navigation'
import ActionBar from '../ActionBar'

const GroupFinder = () => {
  return (
    <div className='group-finder-container'>
      <TitleBar />
      <Navigation />
      <ActionBar />
    </div>
  
  )
}

export default GroupFinder