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
function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      {/* <Login /> */}
    {/* <Route component={ResponsiveDrawer}  path='/about' exact/> */}
    {/* <ResponsiveDrawer/> */}
      <Switch>
        <Route exact  path='/login'>
          <Login/>
          </Route>
          {/* <Route component={ResponsiveDrawer} exact path="/" />
          <Route  component={ImageSlider} path='/imageSlider' exact/>  */}
         {/* <PrivateRoute component={ResponsiveDrawer}  path='/' exact/> */}
          <PrivateRoute component={About} path='/about' exact></PrivateRoute>
          <PrivateRoute  component={ImageSlider} path='/imageSlider' exact/>
          {/* <Route component={ImageUpload}  path='/imageUpload' exact/>
          <Route component={EditAbout}  path='/aboutEdit' exact/> */}

          {/* <Route component={AboutPopUp}  path='/aboutPopup' exact/> */}
          {/* <Route component={Images}  path='/Images' exact/> */}
        {/* <PrivateRoute component={ResponsiveDrawer}  path='/' exact/> */}
        {/* <PrivateRoute element={<ResponsiveDrawer/>} path='/ad' exact/> */}
        {/* <PrivateRoute component={DataTable}  path='/about' exact/> */}
      </Switch>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
