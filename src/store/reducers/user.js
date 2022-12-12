const reducer = (state = {}, action) => {
  switch (action.type) {
    case "user/getUser":
      return state
    case "user/setUser":
      return { ...action.payload }
    default:
      return state
  }
}

export default reducer
