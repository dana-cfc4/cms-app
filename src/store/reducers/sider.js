const initialState = {
  isSiderDisplayed: true
}

export default function siderIsDisplayed(state = initialState, action) {
  switch (action.type) {
    case 'SIDER_IS_DISPLAYED':
      return { ...state, isSiderDisplayed: !state.isSiderDisplayed }
    default:
      return state
  }
}