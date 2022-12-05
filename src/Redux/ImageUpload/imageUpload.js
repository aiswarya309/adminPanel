import axios from 'axios';
import {ImageAction} from './ImageAction'
function ImageApi(formData){
    console.log("value frm middle",formData)
    return function(dispatch){
        // axios.post(`http://localhost:5000/admin/image/`)
        // axios.post({url:`http://localhost:5000/admin/image`,data:{img:image.img},headers:{'Content-Type':'multipart/form-data'}})
        axios.post(`http://localhost:5000/admin/image`, formData, {   headers: {     "Content-Type": "multipart/form-data",   }, })
        .then(res=>{
            console.log("Response",res);
            // dispatch(homeRedux(res.data.result))
        })
        .catch(error => {
            return error;
          });
    }
}
export default ImageApi