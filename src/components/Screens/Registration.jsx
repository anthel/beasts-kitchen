import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';





const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '15ch',
    },
  },
}));

export default function Registration() {

  const classes = useStyles();

  return (
    <Container maxWidth='md'>
      <ArrowBackIcon/>
      <h1>Create Account</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Firstname" />
        <TextField id="standard-basic" label="Lastname" />
      </form>
    </Container>
  )
}
