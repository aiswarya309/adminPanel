import {EMPLOYEE} from './employeeTpye'
const initialState={
    empData:[]
}
function empReducer(State=initialState,action){
    switch(action.type){
        case EMPLOYEE:
            return{
                ...State,
                empData:action.payload
            }
        default:
            return State
    }
}
export default empReducer