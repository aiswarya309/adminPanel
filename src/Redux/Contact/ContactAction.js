import {CONTACT} from './Contactype'
export const ContactAction=(contact)=>{
    // console.log("about_action.tsx result-payload",result)
return{
    type:CONTACT,
    payload:contact
}
}


