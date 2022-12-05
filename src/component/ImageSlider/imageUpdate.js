import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import UpdateImage from '../../Redux/ImageUpload/ImageUpdate'
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ImageUpdate({image}) {
  const [open, setOpen] = React.useState(false);
  const [file,setFile]=React.useState()
  const url="http://localhost:5000/slider/"
  const dispatch=useDispatch()
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange=(e)=>{
    setFile(e.target.files[0])
    console.log("e.target.files",e.target.files);
  }
  const handleClick=()=>{
    const formData=new FormData()
    formData.append('img',file)
    dispatch(UpdateImage(formData,image.id))
  }

  return (
    <div>
        <IconButton onClick={handleClickOpen}>
            <EditIcon />
        </IconButton>
      {/* <Button variant="outlined" >
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Update image
        </BootstrapDialogTitle>
        <div>
        <img src={url+image.image} style={{width:'200px',height:'200px',borderRadius:'50%', backgroundColor:'grey'}}/>
        </div>
        <form>

        <DialogContent dividers style={{heigt:'200px' , width:'400px' , display:'flex', alignItems:'center',justifyContent:'center'}}>
         <Box>
            <input type='file' onChange={handleChange}/>
         </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClick} type='submit'>
            Save
          </Button>

          <Button autoFocus onClick={handleClose} >
            Cancel
          </Button>
        </DialogActions>
        </form>


      </BootstrapDialog>
    </div>
  );
}