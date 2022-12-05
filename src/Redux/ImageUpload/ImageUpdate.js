import axios from 'axios';
import {ImageAction} from './ImageAction'
function UpdateImage(formData,id){
    console.log("value frm middle",formData)
    return function(dispatch){
        // axios.post({url:`http://localhost:5000/admin/image`,data:{img:image.img},headers:{'Content-Type':'multipart/form-data'}})
        axios.patch(`http://localhost:5000/admin/imageUpdate`, formData,{params:{id:id}},{headers: {"Content-Type": "multipart/form-data",}, })
        .then(res=>{
            console.log("Response",res);
            // dispatch(homeRedux(res.data.result))
        })
        .catch(error => {
            return error;
          });
    }
}
export default UpdateImage