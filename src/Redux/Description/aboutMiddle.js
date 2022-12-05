import axios from 'axios';
import {AboutAction} from './AboutAction';
// import { useDispatch, useSelector} from 'react-redux';
// import {authFalse} from '../../Redux/App/actionApp';
// import { useHistory } from 'react-router-dom'
// import {tockenChange} from '../../Redux/Login/loginAction'

function AboutAdmin(){
    // console.log("admin AboutMiddle")
    return function(dispatch){
            axios.get(`${process.env.REACT_APP_BACKEND}/admin/about`)
        .then(response=>{
            // console.log("response",response.data.result);
            dispatch(AboutAction(response.data.result))
        })
        .catch(error => {
            return error;
          });
    }
    
}
export default AboutAdmin
