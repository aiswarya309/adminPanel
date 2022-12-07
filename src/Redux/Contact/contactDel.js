import axios from "axios";

function contactDel(id){
    return function(dispatch){
        axios.delete(`http://localhost:5000/admin/contactDelete`,{id:id})
    .then((res)=>{
        console.log("res",res)
        // dispatch(AboutAdmin())
    })
    .catch((err)=>{
        console.log("err",err);
    })
    }
}
export default contactDel