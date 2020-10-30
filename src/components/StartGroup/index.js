import React from 'react'
import { useSelector } from 'react-redux'
import './start-group-form.css'

const StartGroupForm = () => {
  const groupType = useSelector(state => state.navigation)

  return (
    <div className='start-group-container'>
      <h2>Start {groupType} Group</h2>
    </div>
  )
}

export default StartGroupForm