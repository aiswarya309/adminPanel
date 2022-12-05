import {ACTION_TYPE} from './ActionType'
const initialState ={
    about :[]
}
function AboutDetails(State = initialState,action){
    switch(action.type){
        case ACTION_TYPE:
            return{
                ...State,
                about : action.payload
            };
        default:
            return State
    }
}

export default AboutDetails