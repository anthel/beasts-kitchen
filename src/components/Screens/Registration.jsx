import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { setUsers } from '../Redux/actions';
import withStyles from '../HOCS/withStyles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Beasts Inc.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
/**
 * @desc Screen component responsible for rendering the registration screen. Creates a new user object based on 4 inputs from the user,
 * and uses validation to check that the input is correct. New users are saved in Redux global state. Uses MUI HOC for styling.
 * @author Ante Hellgren
 */
class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };

    this.validator = new SimpleReactValidator({autoForceUpdate: this});
  }
  
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    const { firstName, lastName, email, password } = this.state;

    return (
      <Container component="main" maxWidth="xs" className={classes.RegiContainer}>
        <CssBaseline />
        <div className={classes.RegiCard}>
          <Avatar className={classes.RegiAvatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.RegiTitle}>
            Sign up
          </Typography>
          <form className={classes.RegiForm} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.RegiFormInput}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={this.handleChange}
                />
                {this.validator.message('firstName', firstName, 'required|string|max:12')}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.RegiFormInput}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={lastName}
                  onChange={this.handleChange}
                />
                {this.validator.message('lname', lastName, 'required|string|max:15')}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.RegiFormInput}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={this.handleChange}
                />
                {this.validator.message('email', email, 'required|email')}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.RegiFormInput}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={this.handleChange}
                />
                {this.validator.message('password', password, 'required|min:8')}
              </Grid> 
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(event) => {
                if(this.validator.allValid()) {
                  const user = {
                    email: this.state.email,
                    password: this.state.password,
                  };
                  const newUsers = [...this.props.users, user];

                  this.props.setNewUser(newUsers);
                  this.props.history.push('/login');
                } else {
                    this.validator.showMessages();
                    this.forceUpdate();
                }
                event.preventDefault();
              }}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  users: state.root.users,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setNewUser: (users) => dispatch(setUsers(users)),
})

export default compose(
  withStyles,
  connect(mapStateToProps, mapDispatchToProps)
)(SignUp);