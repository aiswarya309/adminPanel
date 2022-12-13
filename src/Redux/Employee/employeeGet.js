import axios from 'axios'
import {employeeAction} from './employeeAction'
function employeeGet(){
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_BACKEND}/admin/employee`)
        .then(res=>{
            console.log("Response from empGet:",res)
            dispatch(employeeAction(res.data.result))
        })
        .catch((err)=>{
            console.log("ERROR",err);
        })
    }
}
export default employeeGet