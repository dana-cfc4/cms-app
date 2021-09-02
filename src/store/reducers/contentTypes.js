const initialState = {
  contentTypes: []
}

export default function addContentType(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CONTENT_TYPE':
      return { ...state, contentTypes: [...state.contentTypes, { ...action.content, id: state.contentTypes.length + 1  }] }
    case 'SET_CONTENT_TYPE':
      return { ...state, contentTypes: action.content }
    default:
      return state
  }
}