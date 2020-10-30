import React from 'react'
import './group-finder.css'
import TitleBar from '../TitleBar'

const GroupFinder = ({ children }) => {
  return (
    <div className='group-finder-container'>
      <TitleBar />
      {children}
    </div>
  
  )
}

export default GroupFinder