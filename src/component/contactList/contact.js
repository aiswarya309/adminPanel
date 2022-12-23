import * as React from 'react';
import './contact.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import AboutAdmin from '../../Redux/Description/aboutMiddle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@material-ui/core';
import {Button} from '@material-ui/core';
import AboutPopUp from '../About/aboutPopUp'
import { useLocation ,useHistory} from "react-router-dom";
import  aboutDel  from '../../Redux/Description/aboutDelete'
import { DeleteForever } from '@mui/icons-material';
import ContactGet from '../../Redux/Contact/contactGet'
import contactDel from '../../Redux/Contact/contactDel'
import ContactView from './contactView'

export default function ContactList() {
  const dispatch=useDispatch()
  const history=useHistory()
  const url="http://localhost:5000/slider/"

  // const navigate=useNavigate()
  const rows=useSelector((State)=>{
    return State.ContactReducer.contact
  })

//   const btnEdit=(edit)=>{
//     // console.log("id frm edit icon",edit)
//     // history.push('/aboutEdit',{state:edit})
//     history.push({pathname:'/aboutEdit',state:{edit:edit}})
//   }
  // const btnDelete=(del)=>{
  //   // console.log("id frm edit icon",del)
  //   dispatch(contactDel(del))
  // }
  useEffect(()=>{
    // console.log("useEffect In");
    dispatch(ContactGet())
  },[])
  return (
    <div className='mainContact'>
      {/* <AboutPopUp/> */}
      {/* <Button variant="outlined">Add</Button> */}
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phno</TableCell>
            <TableCell align="right">Place</TableCell>
            <TableCell align="right">Resume</TableCell>
            <TableCell align="right">View</TableCell>

            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row,index) => (
            <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {console.log("ROW",rows)}
                {index + 1}
              </TableCell>
              <TableCell align="right">{row.first_name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phn}</TableCell>
              <TableCell align="right">{row.place}</TableCell>
              <TableCell align="right">{row.Resume}</TableCell>
              <TableCell align="right">
                <ContactView contact={row}/>
              </TableCell>


               {/* <TableCell align="right" sx={{display:'flex'}}><EditIcon/><DeleteIcon/></TableCell> */}
              {/* <TableCell align="right" sx={{display:'flex'}}>
              <IconButton aria-label="delete" onClick={()=>{btnDelete(row.id)}}>
                  <DeleteIcon />
                  </IconButton> 
                <IconButton aria-label="Edit" >
                <EditIcon />
                </IconButton>  
              </TableCell>  */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}