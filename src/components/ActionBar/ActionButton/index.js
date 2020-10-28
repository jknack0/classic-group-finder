import React from 'react'
import { useSelector } from 'react-redux'
import './action-button.css'

const ActionButton = ({ label }) => {
  const currentSelected = useSelector(state => state.navigation)

  return (
    <div className={`action-button ${currentSelected ? 'action-button-selected  ' : ''}`}>
      {label}
    </div>
  )
}

export default ActionButton