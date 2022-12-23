import axios from "axios";
import employeeGet from './employeeGet'
function empDelete(id){
    return function(dispatch){
        axios.delete(`http://localhost:5000/admin/empDelete`,{params:{id:id}})
    .then((res)=>{
        console.log("res",res)
        dispatch(employeeGet())
        // alert("Successfully deleted")

    })
    .catch((err)=>{
        console.log("err",err);
    })
    }
}
export default empDelete