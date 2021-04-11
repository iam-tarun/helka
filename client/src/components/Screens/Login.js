import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import LandingNavBar from './LandingNavBar'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Login = ({history}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    
    useEffect(() => {
        if(localStorage.getItem("authToken")) {
            history.push("/dashboard");
        }

    }, [history]);


    const handleLogin = async (e) => {
        e.preventDefault()

        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };

        try {
            const {data} = await axios.post(
                "/api/auth/login",
                {email, password},
                config
            )

            localStorage.setItem("authToken", data.token)

            history.push("/dashboard");
        } catch (error) {
            setError(error.response.data.error)
            setTimeout(() => {
                setError("");
            }, 5000)
        }

    }

    return (
        <Grid justify="center" container>
            <Grid item xs={11}>
                <LandingNavBar />
            </Grid>
            <Grid item xs={4}>
            <form onSubmit={handleLogin} >
                <Grid direction="column" alignItems="center" container spacing={4}>
                    <Grid item xs={12}>
                    {error && <span>{error}</span>}
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        type="email"
                        label="email"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        type="password"
                        label="password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                    </Grid>
                    <Grid item xs={12}>
                   <Button variant="outlined" type="submit" >Login</Button>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography>Didn't have a account? <Link to="/register" >Create Account</Link> </Typography>
                    </Grid>
                </Grid>
            </form>
            </Grid>
        </Grid>
    )
}

export default Login
