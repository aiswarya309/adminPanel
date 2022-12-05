import { combineReducers } from "redux";
import LoginReducer from './Login/loginReducer'
import AboutDetails from './Description/AboutReducer'
import imageReducer from './ImageUpload/ImageReducer'

const rootReducer = combineReducers({
    LoginReducer,
    AboutDetails,
    imageReducer
  })
  export default rootReducer