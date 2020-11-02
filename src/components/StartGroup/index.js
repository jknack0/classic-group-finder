import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import dungeons from '../../constants/dungeons'
import raids from '../../constants/raids'

import './start-group-form.css'

const StartGroupForm = () => {
  const groupType = useSelector(state => state.navigation)
  let locations
  if(groupType === 'Dungeon' || groupType === 'Boosts') {
    locations = dungeons
  } else if (groupType === 'Raid') {
    locations = raids
  }

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [location, setLocation] = useState('')

  return (
    <div className='start-group-container'>
      <h2>Start {groupType} Group</h2>
      <div className='start-group-form'>
        <form>
          <label htmlFor='groupTitle'>Title:</label><br />
          <input name='groupTitle' value={title} onChange={(event) => setTitle(event.target.value)} /><br />
          <label htmlFor='location'>Location:</label><br />
          <select onChange={(event) => setLocation(event.target.value)}name="cars" id="cars">
            { locations && locations.map(location => <option value={location}>{location}</option>) }
          </select><br />
          <label htmlFor='details'>Details:</label><br />
          <textarea name='details' value={details} onChange={(event) => setDetails(event.target.value)} rows='4' cols='50' /><br />
        </form>
      </div>
    </div>
  )
}

export default StartGroupForm