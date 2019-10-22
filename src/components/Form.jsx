import React, { Component } from "react";
import withStyles from '@material-ui/core/styles/withStyles'

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { TextField, Button, Paper } from "@material-ui/core";
import UserDetail from "./UserDetail";
import {addUser} from '../Redux/actions/userAction'

import {connect} from 'react-redux'

const styles = {
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
};

const infos = {
  info : [{
    firstName: 'Moses',
    lastName: 'Sapele',
    birthday: '22 june 1998',
    age: '22',
    hobby : 'watching Anime'
  }
  ]
};

class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        birthday: '',
        age: '',
        hobby : '',
    }
    
    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
      e.preventDefault()
      const { firstName, lastName, birthday, age, hobby } = this.state
      const newInfo = {firstName, lastName, birthday, age, hobby};
      infos.info.push(newInfo)
      this.props.addUser(infos)
      // this.setState({info: infos})
    }
  render() {
    const { classes, user: {info} } = this.props;
    const { firstName, lastName, age, hobby} = this.state
    const userTable = info.map(user => <UserDetail key={user.id} firstName={user.firstName} lastName={user.lastName} birthday={user.birthday} age={user.age} hobby={user.hobby}/>)
    return (
      <Grid container className={classes.form}>
        <Grid item sm >
          <div className={classes.over}>
            <Paper className={classes.paper}>
              <Typography variant='h5'>Added UserDetails</Typography>
              {userTable}
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
              value={firstName}
              onChange={this.handleChange}
            />
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
              className={classes.textField}
              value={lastName}
              onChange={this.handleChange}
            />
              <TextField
              id="date"
              name="birthday"
              onChange={this.handleChange}
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
              value={age}
              onChange={this.handleChange}
            />
            <TextField
              id="hobby"
              name="hobby"
              label="Hobby"
              className={classes.textField}
              value={hobby}
              onChange={this.handleChange}
            />
            
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
              className={classes.button}
            >
              Submit UserDetails
            </Button>
            <br />
          </form>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({  
  user: state.user
});

const mapActionsToProps = {
  addUser
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Form));
