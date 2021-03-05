import React,{useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function Login(){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [err,setErr]= useState('');


    function handleSubmit(event){
        event.preventDefault();
        
        setErr('');
        axios.post('http://localhost:8000/api/users/login',{
            email,
            password
        },{ withCredentials:true })
        .then(()=> navigate('/beers'))
        .catch(() =>setErr('Please check you credentials!'));
    }

        const useStyles = makeStyles((theme) => ({
            root: {
            height: '100vh',
            backgroundColor: '#292929',
            },
            image: {
            backgroundImage: 'url(https://images.pexels.com/photos/5530167/pexels-photo-5530167.jpeg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 
                theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
            },
            paper: {
            margin: theme.spacing(8, 4),
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
            marginTop: theme.spacing(1),
            },
            submit: {
            margin: theme.spacing(3, 0, 2),
            },
        }));

        const classes = useStyles();

    return(
        <div>
            <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form 
                    onSubmit={handleSubmit}
                    className={classes.form} 
                    noValidate>
                        {/* <input name="email" value={email} onChange={e =>setEmail(e.target.value)}/> */}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={email} 
                            onChange={e =>setEmail(e.target.value)}
                            autoComplete="email"
                            autoFocus
                        />
                        {/* <input type="password" name="password" value={password} onChange={e =>setPassword(e.target.value)}/> */}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            value={password} 
                            onChange={e =>setPassword(e.target.value)}
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                        <Grid item>
                            <Link href="/newuser" variant="body2">
                            {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
            </Grid>
        </div>
    );
}

        // {/* <h1>Login/Reg</h1>
        // <div className={styles.beerForm}>
        //     <Link to={"/newuser/"}>Create Account</Link>
        //     {err && (<p style={{color:'red'}}>{err}</p>)}
        //     <form onSubmit={handleSubmit}>

        //         <div className={styles.box1}>
        //             <label>Email</label>
        //             <input name="email" value={email} onChange={e =>setEmail(e.target.value)}/>
        //         </div>
        //         <div className={styles.box1}>
        //             <label>Password</label>
        //             <input type="password" name="password" value={password} onChange={e =>setPassword(e.target.value)}/>
        //         </div>
        //         <button>Submit</button>
        //     </form>
        // </div>
        // </div> */}