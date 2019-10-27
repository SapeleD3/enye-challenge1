import React, { useReducer } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { TextField, Button, Paper } from "@material-ui/core";
import UserDetail from "./UserDetail";
import {useDispatch, useSelector} from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import {addinfoAction} from '../actions'

const styles = makeStyles(theme => ({
  form : {
    textAlign: 'center',
    marginTop: 20
  },
  pageTitle: {
      margin: '20px auto 20px auto'
  },
  textField : {
      display: 'flex',
      margin: '10px auto 10px auto',
      width: 300
  },
  button: {
      marginTop: 20,
      postion: 'relative'
  },
  paper: {
    minHeight: 550,
    padding: 20,
    minWidth: 300,
    postion: 'fixed'
  },
  over: {
    overflow: 'hidden'
  }
}));


function Form() {
  const classes = styles()
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      firstName: '',
      lastName: '',
      birthday: '',
      age: '',
      hobby: ''
    }
  );
  const info = useSelector(state => state.info)
  const dispatch = useDispatch()
  const addInfo = (infos) => dispatch(addinfoAction(infos))

    
    const handleChange = (e) => {
      setUserInput({[e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      addInfo({
        firstName: userInput.firstName,
        lastName: userInput.lastName,
        birthday: userInput.birthday,
        age: userInput.age,
        hobby: userInput.hobby
      })
    }
    return (
      <Grid container className={classes.form}>
        <Grid item sm >
          <div className={classes.over}>
            <Paper className={classes.paper}>
              <Typography variant='h5'>Added UserDetails</Typography>
              <UserDetail />
            </Paper>
          </div>
          
        </Grid>
        <Grid item sm>
          <Typography variant="h4" className={classes.pageTitle}>
            enyeForm
          </Typography>
          <form >
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
              className={classes.textField}
              value={info.firstName}
              onChange={handleChange}
            />
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
              className={classes.textField}
              value={info.lastName}
              onChange={handleChange}
            />
              <TextField
              id="date"
              name="birthday"
              onChange={handleChange}
              label="Birthday"
              type="date"
              defaultValue={Date.now().toISOString}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="age"
              name="age"
              label="Age"
              className={classes.textField}
              value={info.age}
              onChange={handleChange}
            />
            <TextField
              id="hobby"
              name="hobby"
              label="Hobby"
              className={classes.textField}
              value={info.hobby}
              onChange={handleChange}
            />
            
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className='textField'
            >
              Submit UserDetails
            </Button>
            <br />
          </form>
        </Grid>
      </Grid>
    );
  }

  export default Form