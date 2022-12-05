import { AUTHDATA } from './loginType';
export const authData = ()=>{
    console.log("Login Action");
    return {
        type : AUTHDATA
    }
}