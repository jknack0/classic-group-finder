import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './action-button.css'

const ActionButton = ({ label, link }) => {
  const currentSelected = useSelector(state => state.navigation)

  return (
    <Link to={link} >
      <div className={`action-button ${currentSelected ? 'action-button-selected  ' : ''}`}>
        {label}
      </div>
    </Link>
  )
}

export default ActionButton