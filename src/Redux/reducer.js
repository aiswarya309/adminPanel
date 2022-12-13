import { combineReducers } from "redux";
import LoginReducer from './Login/loginReducer'
import AboutDetails from './Description/AboutReducer'
import imageReducer from './ImageUpload/ImageReducer'
import ContactReducer from './Contact/ContactReducer'
import empReducer from './Employee/employeeReducer'

const rootReducer = combineReducers({
    LoginReducer,
    AboutDetails,
    imageReducer,
    ContactReducer,
    empReducer
  })
  export default rootReducer