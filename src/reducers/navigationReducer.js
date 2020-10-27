const navigationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SELECTED':
      return action.filter
    default:
      return state
  }
}

// Action Creators
export const setSelected = (filter) => {
  return {
    type: 'SET_SELECTED',
    filter
  }
}

export default navigationReducer