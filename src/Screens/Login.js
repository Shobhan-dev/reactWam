import React from 'react'
import { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import GoogleLogin from 'react-google-login';
import { Link as Lk} from 'react-router-dom'
import firebase from '../firebase'

const Login = () => {


    const [isLogin, setIsLogin] = useState(false)
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              setIsLogin(true)
              setName(user.displayName)
              setPhoto(user.photoURL)
            } else {
              console.log('no user is signed in')
            }
          })
    }, [isLogin, name, photo])


    const onSubmit = ()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch((error) => {
            console.log(error)
        });
    }

    const onLogout = ()=>{
        firebase.auth().signOut().then(() => {
            setIsLogin(false)
          }).catch((error) => {
              console.log(error)
          });
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
          backgroundColor: '#480ca8',
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
        submit: {
        //   margin: theme.spacing(3, 0, 2),
          backgroundColor: '#480ca8',
          marginBottom:'0.5rem'
        },
      }))
      const classes = useStyles();



    return (
        <div>
            <Lk to='/'>
                <Button variant="contained"
                        color="primary" 
                        className={classes.submit}>Back
                </Button>
            </Lk>

            {
                isLogin === false ? 
            
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <PersonRoundedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
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
                    <Grid>
                    {/* <GoogleLogin
                                clientId="373614591720-64d5eearccoggk2hd1uo533bnt6kbjag.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            /> */}
                        <Button 
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onSubmit}>Sign in with google</Button>
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link href="#" variant="body2">
                            {"New user? Sign Up"}
                        </Link>
                        </Grid>
                    </Grid>
                    </form>
                </div>
            </Container> 
            :
            <Container>
                <div className={classes.paper}>
                    
                    <img style={{width:'25%', border:'1px solid #480ca8'}} src={photo}/>
                    <Typography style={{marginTop:50, fontFamily:'ubuntu'}} component="h1" variant="h5">
                            {name}
                        </Typography>
                    
                    <Button 
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onLogout}>Logout</Button>
                </div>
            </Container>
            }
        </div>
    )
}

export default Login






