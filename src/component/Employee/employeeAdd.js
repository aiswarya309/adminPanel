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
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import empUpdate from '../../Redux/Employee/employeeUpdate'
import {useHistory} from 'react-router-dom'
import EmployeePost from '../../Redux/Employee/employeeAdd'
import { toast } from 'react-toastify';
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

export default function EmployeeAdd() {
  const history=useHistory();
    // console.log("emp prop",emp)
  const [open, setOpen] = React.useState(false);
  const [name,setName]=React.useState('')
  const [email, setEmail] = React.useState('');
  const [country,setCountry]=React.useState('')
  const [jobTitle, setjobTitle] = React.useState('');
  const [pincode, setPincode] = React.useState('');

//   const url="http://localhost:5000/slider/"
  const dispatch=useDispatch()
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
//   const handleChange=(e)=>{
//     setFile(e.target.files[0])
//     console.log("e.target.files",e.target.files);
//   }
  const nameChange =(e)=>{setName(e.target.value)}
  const emailChange =(e)=>{setEmail(e.target.value)}
  const countryChange =(e)=>{setCountry(e.target.value)}
  const jobTitleChange =(e)=>{setjobTitle(e.target.value)}
  const pincodeChange =(e)=>{setPincode(e.target.value)}

  const handleClick=(e)=>{
    e.preventDefault();
    toast("Details saved")
    dispatch(EmployeePost({name:name,email:email,country:country,jobTitle:jobTitle,pincode:pincode}))
    history.push('/Employee')
    setName('')
    setEmail('')
    setCountry('')
    setjobTitle('')
    setPincode('')
    // dispatch(UpdateImage(emp.id))
  }

  return (
    <div>
        <IconButton onClick={handleClickOpen}>
            Add
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
         Add Employee Details
        </BootstrapDialogTitle>
        <div>
        {/* <img src={url+image.image} style={{width:'200px',height:'200px',borderRadius:'50%', backgroundColor:'grey'}}/> */}
        </div>
        <form>

        <DialogContent dividers style={{heigt:'200px' , width:'400px' , display:'flex', alignItems:'center',justifyContent:'center'}}>
         <Box>
            {/* <input type='file' onChange={handleChange}/> */}
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={nameChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="text"
            fullWidth
            variant="standard"
            value={email}
            onChange={emailChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Country"
            type="text"
            fullWidth
            variant="standard"
            value={country}
            onChange={countryChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Job Title "
            type="text"
            fullWidth
            variant="standard"
            value={jobTitle}
            onChange={jobTitleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Pincode"
            type="text"
            fullWidth
            variant="standard"
            value={pincode}
            onChange={pincodeChange}
          />
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