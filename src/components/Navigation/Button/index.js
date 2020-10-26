import React from 'react'
import './button.css'

const Button = ({ label, image, alt }) => {
  return (
    <div className='button'>
      <img className='button-image' src={image} alt={alt} />
      <div className='button-label'>
        {label}
      </div>
    </div>
  )
}

export default Button