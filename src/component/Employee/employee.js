import * as React from 'react';
// import './contact.css'
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
import { useLocation ,useHistory} from "react-router-dom";
import { DeleteForever } from '@mui/icons-material';
import employeeGet from '../../Redux/Employee/employeeGet'
import EmployeeEdit from './employeeEdit'
import empDelete from '../../Redux/Employee/employeeDelete'
import EmployeeAdd from './employeeAdd'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'  ;


export default function Employee() {
  const dispatch=useDispatch()
  const history=useHistory()
  const url="http://localhost:5000/slider/"

  // const navigate=useNavigate()
  const rows=useSelector((State)=>{
    return State.empReducer.empData
  })
  console.log("state from emp componet",rows);

  // const btnEdit=(edit)=>{
  //   // console.log("id frm edit icon",edit)
  //   // history.push('/aboutEdit',{state:edit})
  //   history.push({pathname:'/aboutEdit',state:{edit:edit}})
  // }
  const btnDelete=(del)=>{
    // console.log("id frm edit icon",del)
    dispatch(empDelete(del))
  }
  useEffect(()=>{
    // console.log("useEffect In");
    dispatch(employeeGet())
  },[])
  return (
    <div className='mainContact'>
     <EmployeeAdd/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Job Title</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Pincode</TableCell>
            <TableCell align="right">Action</TableCell>

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
              <TableCell align="right">{row.job_title}</TableCell>
              <TableCell align="right">{row.country}</TableCell>
              <TableCell align="right">{row.pincode}</TableCell>
              {/* <TableCell align="right">
                <ContactView contact={row}/>
              </TableCell> */}


               {/* <TableCell align="right" sx={{display:'flex'}}><EditIcon/><DeleteIcon/></TableCell> */}
              <TableCell align="right" sx={{display:'flex'}}>
              <IconButton aria-label="delete" onClick={()=>{btnDelete(row.id)}}>
                  <DeleteIcon />
                  </IconButton> 
                <IconButton aria-label="Edit" >
                <EmployeeEdit emp={row}/>
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