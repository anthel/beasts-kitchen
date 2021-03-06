import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';

import { setLoggedUser } from '../Redux/actions';
import SavedRecipesScreen from './SavedRecipesScreen';
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
 * @desc - this component represents the Login Screen. 
 * It includes a login form with email and password.
 * Validation from 'simple-react-validator'.
 * Has logic to check if a user exists in Redux, if it does,
 * the user can log in and the redux state for the loggedUser
 * changes to true, the user then gets re-directed to the Saved Recipes Screen.
 * If user is logged in, the Saved Recipes Screen is rendered instead of the
 * Login Screen.  
 * @author - Katalina & Ante
 */
class Login extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({autoForceUpdate: this});

    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputs = (e) => {
    this.setState({[e.target.name]: e.target.value});
    e.preventDefault();
  }

  navigateToSavedRecipesScreen = () => {
    if (this.validator.allValid()) {
      for(let i=0;i < this.props.users.length;i++) {
        if(this.state.email === this.props.users[i].email
          && this.state.password === this.props.users[i].password) {
            this.props.setLoggedIn(true);
            this.props.history.push('/savedrecipes');
        }
      } 
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  render() {
    const { classes } = this.props;

    if(this.props.isLoggedIn === false) {
      return (
        <Container className={classes.logInContainer} component="main" maxWidth="xs">
          <CssBaseline /> 
          <div className={classes.logInCard}>
            <Avatar className={classes.logInAvatar}>
            </Avatar>
            <Typography 
              className={classes.LogInTitle} 
              component="h1" 
              variant="h5">
              Log in
            </Typography>
            <form className={classes.logInForm} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    className={classes.LogInFormInput}
                    value={this.state.email}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={this.handleInputs}
                  />
                  {this.validator.message(
                    'email', 
                    this.state.email, 
                    'required|email', 
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.LogInFormInput}
                    value={this.state.password}
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.handleInputs}
                  />
                  {this.validator.message(
                    'password', 
                    this.state.password, 
                    'required|min:8', 
                  )}
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.logInSubmit}
                onClick={this.navigateToSavedRecipesScreen}
              >
                Log in
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/register" variant="body2">
                    You don't have an account? Register here!
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
    else {
      return <SavedRecipesScreen/>
    } 
  }
}

const mapStateToProps = (state, ownProps) => ({
  users: state.root.users,
  isLoggedIn: state.root.loggeduser
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setLoggedIn: (isLoggedIn) => dispatch(setLoggedUser(isLoggedIn)),
})

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
};

export default compose(
  withStyles,
  connect(mapStateToProps, mapDispatchToProps)
)(Login);


