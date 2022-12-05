import {Button} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation ,useHistory} from "react-router-dom";
import AboutUpdate from '../../Redux/Description/aboutEdit'

 function EditAbout(){
  console.log("EDit IN")
  const location=useLocation()
  // const navigate=useNavigate()
  const dispatch=useDispatch()
  const about=location.state.edit
  const id=about.id
  // console.log("About edit:",about,'*',id,"id")
  const [title , setTitle]=React.useState(about.title)
  const [content , setcontent]=React.useState(about.content)
  const handleAdd=()=>{
        dispatch(AboutUpdate({title:title,content:content,id:id}))
        // console.log("content and value",title,content)
        setTitle('')
        setcontent('')
      }
  const titleChange=(e)=>{
    setTitle(e.target.value)
  }
  const contentChange=(e)=>{
    setcontent(e.target.value)
  }
  return(
    <div>
      <TextField id="standard-basic" 
        label="Title" 
        variant="standard" 
        value={title}
        onChange={titleChange}/><br/>

      <TextField id="standard-basic" 
        label="Content" 
        variant="standard" 
        value={content}
        onChange={contentChange}/><br/><br/>
      {/* <Button variant="outlined" onClick={handleAdd}>Edit</Button> */}
      <Button onClick={handleAdd}>Edit</Button>
    </div>
  )
}
export default EditAbout
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import {useSelector,useDispatch} from 'react-redux'
// import AboutEdit from '../../Redux/Description/aboutEdit'

// export default function EditAbout() {
//   const dispatch=useDispatch()
//   const [open, setOpen] = React.useState(false);
//   const [title , setTitle]=React.useState('')
//   const [content , setcontent]=React.useState('')

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleAdd=()=>{
//     dispatch(AboutEdit({title:title,content:content}))
//     // console.log("content and value",title,content)
//     setTitle('')
//     setcontent('')
//   }
//   const titleChange=(e)=>{
//     setTitle(e.target.value)
//   }
//   const contentChange=(e)=>{
//     setcontent(e.target.value)
//   }

//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Edit
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Edit</DialogTitle>
//         <DialogContent>
//           {/* <DialogContentText>
//             To subscribe to this website, please enter your email address here. We
//             will send updates occasionally.
//           </DialogContentText> */}
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Title"
//             type="email"
//             fullWidth
//             variant="standard"
//             value={title}
//             onChange={titleChange}
//           />
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Content"
//             type="email"
//             fullWidth
//             variant="standard"
//             value={content}
//             onChange={contentChange}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleAdd}>Edit</Button>
//           <Button onClick={handleClose}>Cancel</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }