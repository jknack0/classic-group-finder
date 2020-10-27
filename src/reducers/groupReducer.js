const groupReducer = (state = [], action) => {
  switch(action.type) {
    case 'CREATE': {
      return [...state, action.data]
    }
    case 'UPDATE': {
      return state.map(group => group.id !== action.data.id ? action.data : group)
    }
    case 'DELETE': {
      return state.filter(group => group.id !== action.data.id)
    }
    default: {
      return state
    }
  }
}

export default groupReducer