import axios from "axios";
// import imageGet from './ImageGet'
function empDelete(id){
    return function(dispatch){
        axios.delete(`http://localhost:5000/admin/empDelete`,{params:{id:id}})
    .then((res)=>{
        console.log("res",res)
        // dispatch(imageGet())
        // alert("Successfully deleted")

    })
    .catch((err)=>{
        console.log("err",err);
    })
    }
}
export default empDelete