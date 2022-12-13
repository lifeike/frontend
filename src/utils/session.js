export const getSession = async () => {
  let sessionJson = localStorage.getItem("session")
  if (sessionJson) {
    try {
      return JSON.parse(sessionJson)
    } catch (err) {
      return
    }
  }
  return
}

export const setSession = async (session) => {
  localStorage.setItem("session", JSON.stringify(session))
}

export const clearSession = async () => {
  localStorage.removeItem("session")
}

export const isAuthenticated = () => {
  const session = getSession()
  return session !== undefined && session.access_token !== undefined && session.refresh_token !== undefined
}
