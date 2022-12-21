import { combineReducers } from "redux"
import user from "./user"
import chat from "./chat"
import movie from "./movie"
import loading from "./loading"

export default combineReducers({ user, loading, movie, chat })
