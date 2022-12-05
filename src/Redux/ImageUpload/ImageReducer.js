import { IMAGE } from "./ImageType"
const initialState={
    image:[]
}
function imageReducer(state=initialState,action){
switch(action.type){
    case IMAGE:
        return{
        ...state,
        image:action.payload
    }
    default:
        return state
}
}

export default imageReducer