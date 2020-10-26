import React from 'react'
import './button.css'

const Button = ({ label }) => {
  return (
    <div className='button'>
      {label}
    </div>
  )
}

export default Button