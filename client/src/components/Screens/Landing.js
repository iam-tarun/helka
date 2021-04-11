import { Grid } from '@material-ui/core'
import React from 'react'
import LandingNavBar from './LandingNavBar'


const Landing = () => {
    return (
        <Grid justify="center" container>
            <Grid item xs={11}>
                <LandingNavBar />
            </Grid>
        </Grid>
    )
}

export default Landing
