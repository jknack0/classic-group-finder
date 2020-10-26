import React from 'react'
import Button from './Button'
import './navigation.css'

const Navigation = () => {
  return (
    <div className='navigation-container'>
      <Button label='Dungeon' />
      <Button label='Raid' />
      <Button label='Questing' />
      <Button label='Boosts' />
    </div>
  )
}

export default Navigation