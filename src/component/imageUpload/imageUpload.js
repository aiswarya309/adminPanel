import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import PhotoCamera from '@material-ui/core/PhotoCamera';
import ImageApi from '../../Redux/ImageUpload/imageUpload'
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function ImageUpload() {
  const dispatch=useDispatch()
  const classes = useStyles();
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.files[0]);
  };
  console.log("value",value);

  const upload=()=>{
    alert("sssssss")
    const formData=new FormData()
    formData.append('img',value)
    console.log("formData",formData);
    dispatch(ImageApi(formData))
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" > 
      <div>
        {/* <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        /> */}
        <input  multiple type="file"  onChange={handleChange} name="img"/>
      </div>
     
      <div>
      <Button variant="contained" component="label"  type="submit" onClick={upload}>
            Upload
            {/* <input hidden accept="image/*" multiple type="file" /> */}
      </Button>
      </div>
    </form>
  );
}
