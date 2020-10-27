import React from 'react'
import './action-button.css'

const ActionButton = ({ label }) => {
  return (
    <div className='action-button'>
      {label}
    </div>
  )
}

export default ActionButton