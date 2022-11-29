const reducer = (
  state = {
    userList: [],
    selectedUser: {},
  },
  action
) => {
  switch (action.type) {
    case "users/getUser":
      return { ...state, userList: action.payload }
    case "users/setUser":
      return { ...state, userList: action.payload }
    case "users/selectUser":
      return { ...state, selectedUser: action.payload }
    default:
      return state
  }
}

export default reducer
