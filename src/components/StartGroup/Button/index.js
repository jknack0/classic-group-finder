import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <div className='start-group-button'>
      {props.children}
    </div>
  )
}

export default Button