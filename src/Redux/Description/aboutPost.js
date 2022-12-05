import axios from "axios"
import AboutAdmin from './aboutMiddle'
function AboutPost(data){
    // console.log("data aboutPost:",data);
    return function(dispatch){
        axios.post(`http://localhost:5000/admin/aboutPost`,{title:data.title,content:data.content})
        .then(res=>{
            // console.log("respns aboutpost",res)
            dispatch(AboutAdmin())
        })
        .catch(err=>{
        })
    }
}
export default AboutPost
