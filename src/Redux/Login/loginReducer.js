import { AUTHDATA } from './loginType';

const initialState={
    Authenticate:false
}

function LoginReducer(State = initialState , action){
    // console.log("State",State)
    // console.log("Reducer state",State.Authenticate)
    switch (action.type){
        case AUTHDATA :
            // console.log("Authdata in")
            return {
                ...State,
                Authenticate : true
            };
        default:
            return State
    }
}
export default LoginReducer