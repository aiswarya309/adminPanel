import axios from 'axios';
import {ContactAction} from './ContactAction'
function ContactGet(){
    // console.log("admin AboutMiddle")
    return function(dispatch){
            axios.get(`${process.env.REACT_APP_BACKEND}/admin/contact`)
        .then(response=>{
            // console.log("response",response.data.result);
            dispatch(ContactAction(response.data.result))
        })
        .catch(error => {
            return error;
          });
    }
    
}
export default ContactGet
