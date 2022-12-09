import * as React from 'react';
import './about.css'
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
import {ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'  ;
// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function About() {
  const dispatch=useDispatch()
  const history=useHistory()
  // const navigate=useNavigate()
  const rows=useSelector((State)=>{
    return State.AboutDetails.about
  })

  const btnEdit=(edit)=>{
    // console.log("id frm edit icon",edit)
    // history.push('/aboutEdit',{state:edit})
    history.push({pathname:'/aboutEdit',state:{edit:edit}})
  }
  const btnDelete=(del)=>{
    // console.log("id frm edit icon",del)
    dispatch(aboutDel(del))
    toast("Successfully deleted")
  }
  useEffect(()=>{
    // console.log("useEffect In");
    dispatch(AboutAdmin())
  },[])
  return (
    <div className='main'>
      <AboutPopUp/>
      {/* <Button variant="outlined">Add</Button> */}
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">title</TableCell>
            <TableCell align="right">content</TableCell>
            <TableCell align="right">action</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.content}</TableCell>
               {/* <TableCell align="right" sx={{display:'flex'}}><EditIcon/><DeleteIcon/></TableCell> */}
              <TableCell align="right" sx={{display:'flex'}}>
              <IconButton aria-label="delete">
                  <DeleteIcon onClick={()=>btnDelete(row.id)}/>
                  </IconButton> 
                <IconButton aria-label="Edit" onClick={()=>btnEdit(row)}>
                <EditIcon />
                </IconButton>  
              </TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}