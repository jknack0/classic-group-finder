import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './action-button.css'

const ActionButton = ({ label, link }) => {
  const isSelected = useSelector(state => state.navigation)
  const showSelectedButton = isSelected ? 'action-button-selected  ' : ''

  if(isSelected) {
    return (
      <Link to={link} >
        <div className={`action-button ${showSelectedButton}`}>
          {label}
        </div>
      </Link>
    )
  } else {
    return (
      <div className={`action-button ${showSelectedButton}`}>
        {label}
      </div>
    )  
  }
}

export default ActionButton