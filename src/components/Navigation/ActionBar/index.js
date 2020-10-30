import React from 'react'
import ActionButton from './ActionButton'
import './action-bar.css'

const ActionBar = () => {
  return (
    <div className='action-bar-container'>
      <ActionButton label='Start Group' link='startgroup' />
      <ActionButton label='Join Group' />
    </div>
  )
}

export default ActionBar