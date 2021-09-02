const initialState = {
  contentTypeItems: []
}

export default function addContentTypeItem(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CONTENT_TYPE_ITEM':
      return { ...state, contentTypeItems: [...state.contentTypeItems, { ...action.item, id: state.contentTypeItems.length + 1  }] }
    case 'SET_CONTENT_TYPE_ITEM':
      return { ...state, contentTypeItems: action.items }
    default:
      return state
  }
}