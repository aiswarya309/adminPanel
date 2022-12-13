import React from "react";
import { Route,Redirect } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
// import { useSelector } from "react-redux";
import LoginReducer from '../../Redux/Login/loginReducer'
import ResponsiveDrawer from '../Home/Home';


const PrivateRoute =({component: Component,...rest }) =>{
    console.log("PrivateRoute")
    const Auth = useSelector((State)=>{
        return State.LoginReducer.Authenticate})
    const Authenticate=localStorage.getItem("adminValue",Auth)
    console.log("Authenticate",Authenticate,"rest",rest)
    return(
        <div>
            <Route {...rest} render ={(props) =>{
                // return auth ? (<Component {...props}/>):(<Redirect to='/login' />)
                // {console.log("localStorage.getItem",localStorage.getItem("adminValue"))}
                if(Authenticate) return (<>
                    <ResponsiveDrawer/>
                    <Component {...props} />
                    </>
                )
                if(!Authenticate) return <Redirect to="/" />
                }}/>
        </div>
    )
}
export default PrivateRoute