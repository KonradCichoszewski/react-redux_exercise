const initialState = {
  color: 'pink'
}

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
      case "CHANGE_COLOR":
        return Object.assign({}, state, {
          color: action.color
        })
      default:
        return state
    }
}
