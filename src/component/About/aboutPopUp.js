import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useSelector,useDispatch} from 'react-redux'
import AboutPost from '../../Redux/Description/aboutPost'
export default function AboutPopUp() {
  const dispatch=useDispatch()
  const [open, setOpen] = React.useState(false);
  const [title , setTitle]=React.useState('')
  const [content , setcontent]=React.useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAdd=()=>{
    dispatch(AboutPost({title:title,content:content}))
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

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="email"
            fullWidth
            variant="standard"
            value={title}
            onChange={titleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Content"
            type="email"
            fullWidth
            variant="standard"
            value={content}
            onChange={contentChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAdd}>Add</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}