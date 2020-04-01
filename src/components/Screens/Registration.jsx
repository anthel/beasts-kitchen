import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
/* import ArrowBackIcon from '@material-ui/icons/ArrowBack'; */





const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  halfSize: {
    width: '17.3ch',
  },
  fullSize: {
    '& > *': {
      margin: theme.spacing(1),
      width: '15ch',
    },
  }
}));

export default function Registration() {

  const [firstname, setFirstname] = React.useState('');
  /* const [lastname, setLastname] = React.useState('');
  const [email, setEmail] = React.useState(''); */
  /* const [password, setPassword] = React.useState(''); */
  const classes = useStyles();

  const handleChange = (event) => {
    setFirstname(event.target.value);
  };

  return (
    <Container maxWidth='md'>
    {/*   <ArrowBackIcon/> */}
      <h1>Create Account</h1>
      <form className={classes.root} noValidate autoComplete="off">
      <FormControl variant="outlined">
        <InputLabel htmlFor="register-firstname">Name</InputLabel>
        <OutlinedInput id="register-firstname" 
          value={firstname} 
          onChange={handleChange} 
          label="Name" 
          className={classes.halfSize}
          />
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel htmlFor="register-lastname">Name</InputLabel>
        <OutlinedInput id="register-lastname" 
          value={firstname} 
          onChange={handleChange} 
          label="Name" 
          className={classes.halfSize}
          />
      </FormControl>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="register-email">Name</InputLabel>
        <OutlinedInput id="register-email" value={firstname} onChange={handleChange} label="Name" />
      </FormControl>
      </form>
    </Container>
  )
}
