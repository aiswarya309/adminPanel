import axios from "axios"
import employeeGet from './employeeGet'
function EmployeePost(data){
    // console.log("data aboutPost:",data);
    return function(dispatch){
        axios.post(`http://localhost:5000/admin/empPost`,{name:data.name,email:data.email,country:data.country,jobTitle:data.jobTitle,pincode:data.pincode})
        .then(res=>{
            console.log("respns aboutpost",res)
            dispatch(employeeGet())
        })
        .catch(err=>{
            console.log("ERR",err);
        })
    }
}
export default EmployeePost
