import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import LandingNavBar from './LandingNavBar'
import {Grid, TextField, Button, Typography} from '@material-ui/core'

const Register = ({history}) => {

    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        const config = {
            header : {
                "Content-Type" : "application/json"
            }
        }

        if(password1 !== password2) {
            setPassword1("");
            setPassword2("");
            setTimeout(() => {
                setError("")
            }, 5000);
            return setError("Passwords do not match")
        }

        try {
            const {data} = await axios.post("/api/auth/register", {fullname, username, email, password:password1}, config)

            localStorage.setItem("authToken", data.token)
            history.push("/dashboard");


        } catch (error) {
            setError(error.response.data.error)
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }

    return (
        <Grid justify="center" container>
            <Grid item xs={11}>
                <LandingNavBar />
            </Grid> 
            <Grid item xs={12}>

            </Grid>
            <Grid item xs={4}>
            <form onSubmit={handleRegister} >
                <Grid alignItems="center" direction="column" container spacing={2}>
                    <Grid item xs={12}>
                        {error && <span>{error}</span>}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined" 
                        type="text"
                        label="Full Name" 
                        value={fullname} 
                        onChange={(e) => setFullname(e.target.value)} 
                        
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined" 
                        type="text"
                        label="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        /> 
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined" 
                        label="email" 
                        type="email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        /> 
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined" 
                        label="Password" 
                        type="password"
                        value={password1} 
                        onChange={(e) => setPassword1(e.target.value)} 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined" 
                        type="password"
                        label="Confirm Password" 
                        value={password2} 
                        onChange={(e) => setPassword2(e.target.value)} 
                        />   
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="outlined" >Register</Button>
                    </Grid>
                    <Typography>Already have an account? <Link to="/login" >Login</Link></Typography>
                </Grid>
            </form>
            </Grid>
        </Grid>
    )
}

export default Register
