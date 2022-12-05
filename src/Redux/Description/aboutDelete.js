import axios from "axios";
import AboutAdmin from './aboutMiddle'

function aboutDel(id){
    return function(dispatch){
        axios.post(`http://localhost:5000/admin/aboutDelete`,{id:id})
    .then((res)=>{
        console.log("res",res)
        dispatch(AboutAdmin())
    })
    .catch((err)=>{
        console.log("err",err);
    })
    }
}
export default aboutDel