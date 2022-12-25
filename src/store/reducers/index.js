import { combineReducers } from "redux"
import user from "./user"
import movie from "./movie"
import loading from "./loading"

export default combineReducers({ user, loading, movie })
