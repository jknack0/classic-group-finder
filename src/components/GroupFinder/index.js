import React from 'react'
import './group-finder.css'
import TitleBar from '../TitleBar'

const GroupFinder = (props) => {
  return (
    <div className='group-finder-container'>
      <TitleBar />
      {props.children}
    </div>
  )
}

export default GroupFinder