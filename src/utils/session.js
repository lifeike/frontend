export const getSession = async () => {
  localStorage.getItem("session")
}

export const setSession = async (session) => {
  localStorage.setItem("session", session)
}

export const clearSession = async () => {
  localStorage.setItem("")
}
