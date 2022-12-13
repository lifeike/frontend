export const getSession = () => {
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

export const setSession = (session) => {
  localStorage.setItem("session", JSON.stringify(session))
}

export const clearSession = () => {
  localStorage.removeItem("session")
}

export const isAuthenticated = () => {
  const session = getSession()
  console.log(session)
  return session != "" && session !== undefined && session.access_token !== undefined && session.refresh_token !== undefined
}
