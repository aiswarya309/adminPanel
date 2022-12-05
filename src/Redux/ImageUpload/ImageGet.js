import axios from 'axios';
import {ImageAction} from './ImageAction'
function imageGet(){
    return function(dispatch){
            axios.get(`${process.env.REACT_APP_BACKEND}/admin/imageGet`)
        .then(response=>{
            // console.log("response in actin get",response.data.result)
            dispatch(ImageAction(response.data.result))
        })
        .catch(error => {
            return error;
          });
    }
    
}
export default imageGet
