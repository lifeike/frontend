const reducer = (state = { chatId: 0 }, action) => {
  switch (action.type) {
    case "chat/setChatId":
      return { ...state, chatId: action.payload }
    default:
      return state
  }
}

export default reducer
