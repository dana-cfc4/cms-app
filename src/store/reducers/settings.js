const initialState = {
  settings: {}
}

export default function setSettings(state = initialState, action) {
  switch (action.type) {
    case 'SET_SETTINGS':
      return {
        ...state, settings: action.settings
      }
    default:
      return state
  }
}