import React from 'react'
import Button from './Button'
import './navigation.css'
import Dungeon from './Button/Assets/dungeon.png'
import Raid from './Button/Assets/raid.png'
import Quest from './Button/Assets/quest.png'
import Boost from './Button/Assets/boost.png'

const Navigation = () => {
  return (
    <div className='navigation-container'>
      <Button label='Dungeon' image={Dungeon} alt='Dungeon icon image' />
      <Button label='Raid' image={Raid} alt='Raid icon image' />
      <Button label='Questing' image={Quest} alt='Quest icon image' />
      <Button label='Boosts' image={Boost} alt='Boost icon image' />
    </div>
  )
}

export default Navigation