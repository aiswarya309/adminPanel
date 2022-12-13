import axios from "axios"
import employeeGet from './employeeGet'
function empUpdate(data){
    // const id = data.id
    console.log("data aboutPost:",data );
    return function(dispatch){
        axios.patch(`http://localhost:5000/admin/empUpdate`,{name:data.name,email:data.email,country:data.country,jobTitle:data.jobTitle,pincode:data.pincode,id:data.id})
        .then(res=>{
            console.log("respns empResponse:-",res.data.result)
            dispatch(employeeGet())
        })
        .catch(err=>{
            console.log("ERROR UPDATE",err)
        })
    }
}
export default empUpdate

