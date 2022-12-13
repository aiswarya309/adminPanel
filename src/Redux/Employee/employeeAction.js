import {EMPLOYEE} from './employeeTpye'
export const employeeAction=(emp)=>{
    return{
        type:EMPLOYEE,
        payload:emp
    }
}