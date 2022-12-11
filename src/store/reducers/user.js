const reducer = (state = {}, action) => {
  switch (action.type) {
    case "users/getUser":
      return state
    case "users/setUser":
      return action.payload
    default:
      return state
  }
}

export default reducer
