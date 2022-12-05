import axios from "axios"
import AboutAdmin from './aboutMiddle'
function AboutUpdate(data){
    // const id = data.id
    console.log("data aboutPost:",data );
    return function(dispatch){
        axios.post(`http://localhost:5000/admin/aboutUpdate`,{title:data.title,content:data.content,id:data.id})
        .then(res=>{
            console.log("respns aboutpost",res)
            // dispatch(AboutAdmin())
        })
        .catch(err=>{
            console.log("ERROR UPDATE",err)
        })
    }
}
export default AboutUpdate
