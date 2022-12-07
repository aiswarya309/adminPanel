import {CONTACT} from './Contactype'
const initialState ={
    contact :[]
}
function ContactReducer(State = initialState,action){
    switch(action.type){
        case CONTACT:
            return{
                ...State,
                contact : action.payload
            };
        default:
            return State
    }
}

export default ContactReducer