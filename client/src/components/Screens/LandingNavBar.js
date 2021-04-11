import React from 'react'
import {Grid, Paper, makeStyles} from '@material-ui/core'
import {NavLink} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration:"none",
        color: "black",
        '&:hover':{
            borderBottom: "3px solid black",
        },
        padding: theme.spacing(1), 
           
    },
    activeComponent: {
        borderBottom: "3px solid black",
    },
}))

const LandingNavBar = () => {

    const classes = useStyles()

    return (
        <Paper elevation={0} >
            <Grid direction="row" justify="space-between" container spacing={4} xs={12} >
                <Grid item xs={2}>
                        <NavLink activeClassName={classes.activeComponent} className={classes.link} exact to="/" >Helka</NavLink>
                </Grid>
                <Grid item xs={8}>

                </Grid>
                <Grid item xs={1} >
                    
                        <NavLink activeClassName={classes.activeComponent} className={classes.link} exact to="/login" >Login</NavLink>
                    
                </Grid>
                <Grid item xs={1}>
                    
                        <NavLink activeClassName={classes.activeComponent} className={classes.link} exact to="/register" >Register</NavLink>
                    
                </Grid>
            </Grid>
        </Paper>
    )
}

export default LandingNavBar
