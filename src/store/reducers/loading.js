const reducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case "loading/turnOn":
      return { ...state, loading: true }
    case "loading/turnOff":
      return { ...state, loading: false }
    default:
      return state
  }
}

export default reducer
