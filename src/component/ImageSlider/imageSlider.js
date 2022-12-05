import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect} from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@material-ui/core';
import {Button} from '@material-ui/core';
import imageGet from '../../Redux/ImageUpload/ImageGet'
import imageDelete from '../../Redux/ImageUpload/imageDelete'
import ImageUpdate from './imageUpdate'
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

export default function ImageSlider() {
  const dispatch=useDispatch()
  const history=useHistory()
  const rows=useSelector((State)=>{
    return State.imageReducer.image
  })
  console.log("ROWS",rows)
  const url="http://localhost:5000/slider/"
  const btnDlt=(del)=>{
    console.log("del",del);
    dispatch(imageDelete(del))
  }
  const btnClick=()=>{
    history.push('/imageUpload')
  }
  useEffect(()=>{
    console.log("useEffect In");
    dispatch(imageGet())
  },[])
  return (
    <div>
      <Button variant="outlined" onClick={btnClick}>Add</Button>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl.no</TableCell>
            <TableCell align="right">Image</TableCell>
            {/* <TableCell align="right">content</TableCell> */}
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
                {row.id}
              </TableCell>
              {/* <TableCell align="right">{row.title}</TableCell> */}
              {/* {{let image= url+row.image}} */}
              <TableCell align="right"><img width='50px' height='50px' src={url+row.image}/></TableCell>
               {/* <TableCell align="right" sx={{display:'flex'}}><EditIcon/><DeleteIcon/></TableCell> */}
              <TableCell align="right" sx={{display:'flex'}}>
              <IconButton aria-label="delete" onClick={()=>{btnDlt(row.id)}}>
                  <DeleteIcon/>
              </IconButton> 
              <ImageUpdate image={row}/>
              {/* <IconButton aria-label="delete">
                <EditIcon />
              </IconButton>   */}
              </TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}