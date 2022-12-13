import { useState,useEffect } from "react";
import './login.css'
import { useHistory ,Link  ,Redirect } from "react-router-dom";
import { useDispatch,useSelector} from 'react-redux';
import { authData } from "../../Redux/Login/loginAction";

function Login(){
    let history = useHistory()
    const dispatch=useDispatch()
    // const auth= useSelector((State)=>{
    //     return State.LoginReducer.Authenticate})   
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
            // console.log("Auth in login",auth)
            localStorage.setItem("adminValue","true")
            console.log("Login success");
          
        }else{
            history.push('/')
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
