import logo from './logo.svg';
import './App.css';
import Login from './component/Login/login';
import ResponsiveDrawer from './component/Home/Home';
import PrivateRoute from './component/PrivateRoute/privateRoute';
import {BrowserRouter as Router ,Route , Switch} from 'react-router-dom';
import About from './component/About/about'
import { Provider } from 'react-redux';
import store from './Redux/store'
import ImageUpload from './component/imageUpload/imageUpload'
import ImageSlider from './component/ImageSlider/imageSlider';
// import AboutPopUp from './component/About/aboutPopUp'
import EditAbout from './component/About/aboutEdit'
import ContactList from './component/contactList/contact'
import Employee from './component/Employee/employee'
// import {ToastContainer ,toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'  ;

function App() {
  console.log("ADMIN PANEL")
  return (
    <Provider store={store}>
      <Router>
        {/* <h1>Admin</h1> */}
        <div className="App">
          <Switch>
            {console.log("App.js  Switch")}
            <Route exact  path='/'>
              <Login/>
            </Route>
            <PrivateRoute component={About} path='/about' exact />
            <PrivateRoute  component={ImageSlider} path='/imageSlider' exact/>
            <PrivateRoute component={ContactList} path='/contact' exact />
            <PrivateRoute component={Employee} path='/Employee'/>
            <Route component={ImageUpload}  path='/imageUpload' exact/>
            <Route component={EditAbout}  path='/aboutEdit' exact/>
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
