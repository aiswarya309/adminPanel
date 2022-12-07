import { combineReducers } from "redux";
import LoginReducer from './Login/loginReducer'
import AboutDetails from './Description/AboutReducer'
import imageReducer from './ImageUpload/ImageReducer'
import ContactReducer from './Contact/ContactReducer'

const rootReducer = combineReducers({
    LoginReducer,
    AboutDetails,
    imageReducer,
    ContactReducer
  })
  export default rootReducer