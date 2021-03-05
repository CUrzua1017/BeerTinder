import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


export default function RegistrationForm(){
    const [formState,setFormState]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setFormState({
            ...formState,
            [name]:value
        });
    }

    function handleSubmit(event){
        event.preventDefault();

        axios.post('http://localhost:8000/api/users',formState, {withCredentials:true})
        
        .then(()=>navigate('/beers'))
        .catch(console.log);
    }

    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: '#CC904F',
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
        }));
    
    const classes = useStyles();


    return(
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form 
                        onSubmit={handleSubmit}
                        className={classes.form} 
                        noValidate>
                        <Grid container spacing={2}>
                        {/* <input type="text" name="firstName" value={formState.firstName} onChange={handleChange} /> */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                            autoComplete="fname"
                            name="firstName"
                            value={formState.firstName}
                            onChange={handleChange}
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                            />
                        </Grid>
                        {/* <input type="text" name="lastName" value={formState.lastName} onChange={handleChange} /> */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            value={formState.lastName}
                            onChange={handleChange}
                            autoComplete="lname"
                            />
                        </Grid>
                        {/* <input type="text" name="email" value={formState.email} onChange={handleChange} /> */}
                        <Grid item xs={12}>
                            <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            autoComplete="email"
                            />
                        </Grid>
                        {/* <input type="password" name="password" value={formState.password} onChange={handleChange} /> */}
                        <Grid item xs={12}>
                            <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            value={formState.password}
                            onChange={handleChange}
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            />
                        </Grid>
                        {/* <input type="password" name="confirmPassword" value={formState.confirmPassword} onChange={handleChange} /> */}
                        <Grid item xs={12}>
                            <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="confirmPassword"
                            value={formState.confirmPassword}
                            onChange={handleChange}
                            label="Confirm Password"
                            type="password"
                            id="confirmPassword"
                            autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
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
        {/* <Box mt={5}>
            <Copyright />
        </Box> */}
            </Container>
        </div>







        // <div className={styles.beerForm}>

        //     <form onSubmit={handleSubmit}>
        //     <div className={styles.box1}>
        //             <label>First Name:</label>
        //             <input type="text" name="firstName" value={formState.firstName} onChange={handleChange} />
        //         </div>
        //         <div className={styles.box1}>
        //             <label>Last Name:</label>
        //             <input type="text" name="lastName" value={formState.lastName} onChange={handleChange} />
        //         </div>
        //         <div className={styles.box1}>
        //             <label>email:</label>
        //             <input type="text" name="email" value={formState.email} onChange={handleChange} />
        //         </div>
        //         <div className={styles.box1}>
        //             <label>Password:</label>
        //             <input type="password" name="password" value={formState.password} onChange={handleChange} />
        //         </div>
        //         <div className={styles.box1}>
        //             <label>Confirm Password:</label>
        //             <input type="password" name="confirmPassword" value={formState.confirmPassword} onChange={handleChange} />
        //         </div>
        //         <button>Submit</button>
        //     </form>
        // </div>
    );


}