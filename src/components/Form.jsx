import React, { Component } from "react";
import withStyles from '@material-ui/core/styles/withStyles'

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { TextField, Button, Paper } from "@material-ui/core";
import UserDetail from "./UserDetail";

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
      minWidth: 300
    }
};

const infos = [{
  FirstName: 'Moses',
  LastName: 'Sapele',
  Birthday: '22 june 1998',
  Age: '22',
  Hobby : 'watching Anime'
}];

class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        birthday: '',
        age: '',
        hobby : ''
    }
    
    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = () => {
      const { firstName, lastName, birthday, age, hobby } = this.state
      const newInfo = {firstName, lastName, birthday, age, hobby};
      infos.push(newInfo)
      console.log('1',infos)
      this.setState({info: infos})
    }
  render() {
    const { classes } = this.props;
    const { firstName, lastName, birthday, age, hobby} = this.state
    console.log(firstName)
    console.log(birthday)
    return (
      <Grid container className={classes.form}>
        <Grid item sm >
          <Paper className={classes.paper}>
            <UserDetail />
          </Paper>
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
              label="Birthday"
              type="date"
              defaultValue={new Date().toISOString}
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

export default withStyles(styles)(Form);
