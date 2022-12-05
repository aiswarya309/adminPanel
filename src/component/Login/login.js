import { useState,useEffect } from "react";
import './login.css'
import { useHistory ,Link  ,Redirect } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { authData } from "../../Redux/Login/loginAction";
// import ResponsiveDrawer from "../Home/Home"; 
// import {BrowserRouter as Router ,Route , Switch} from 'react-router-dom';


// import ResponsiveDrawer from '../Home/Home';
// // import PrivateRoute from '../PrivateRoute/privateRoute';
// import {BrowserRouter as Router ,Route , Switch} from 'react-router-dom';
// import About from '../About/'
// // import { Provider } from 'react-redux';
// // import store from './Redux/store'
// import ImageUpload from '../imageUpload/imageUpload'
// import ImageSlider from './component/ImageSlider/imageSlider';
// // import AboutPopUp from './component/About/aboutPopUp'
// import EditAbout from './component/About/aboutEdit'
function Login(){
    let history = useHistory()
    const dispatch=useDispatch()
    // const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        txtName:'',
        password:''
    })
    const {txtName,password}= loginData
    const btnClick =(e)=>{
        console.log("txtName,password",txtName,password);
        if((txtName === 'admin') && (password === 'admin')){
            dispatch(authData())
            history.push('/about')
            localStorage.setItem("adminValue","true")
            console.log("Login success");
            // <ResponsiveDrawer/>
            // // navigate("/")
            //  <Redirect to="/" />
        }else{
            history.push('/login')
        }
    }
    const logintextname=(val)=>{
        setLoginData({...loginData,txtName:val.target.value})
    }
    const loginpassword=(val)=>{
        setLoginData({...loginData,password:val.target.value})
    }
   
        return(
            <div className="container_lgn">
                <form >
                    Name: <input className="txt" type="text"  onChange={logintextname} value={txtName}/><br/><br/>
                    Password: <input className="txt" type="password" onChange={loginpassword} value={password}/><br/><br/>
                    <button className="btnLogin_lgn" type="button" onClick={btnClick}>Login</button>
                    {/* <Link to="/" onClick={btnClick}>Login</Link> */}
                </form>

            </div>
            )
}
export default Login
