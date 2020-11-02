import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelected } from '../../../reducers/navigationReducer'
import './button.css'

const Button = ({ label, image, alt }) => {
  const dispatch = useDispatch()
  const currentSelected = useSelector(state => state.navigation)
  const isSelected = currentSelected === label ? 'button-selected' : ''

  const handleClick = (event) => {
    event.preventDefault()
    dispatch(setSelected(label))
  }

  return (
    <div className={`button ${isSelected}`} onClick={handleClick}>
      <img className='button-image' src={image} alt={alt} />
      <div className='button-label'>
        {label}
      </div>
    </div>
  )
}

export default Button