import axios from "axios";
import imageGet from './ImageGet'
function imageDelete(id){
    return function(dispatch){
        axios.delete(`http://localhost:5000/admin/imageDelete`,{params:{id:id}})
    .then((res)=>{
        console.log("res",res)
        dispatch(imageGet())
        // alert("Successfully deleted")

    })
    .catch((err)=>{
        console.log("err",err);
    })
    }
}
export default imageDelete