import React from 'react'
import {Grid} from '@material-ui/core'
import SideNav from './SideNav'
import TopNav from './TopNav'

const Dashboard = ({history}) => {
    
    React.useEffect(() => {
        if(!localStorage.getItem("authToken")){
            history.push("/login")
        }
    })


    const handleLogout = () => {
        localStorage.removeItem("authToken")
        history.push("/login")
    }

    return (
        <Grid container direction="row" spacing={2}>
            <Grid item xs={2}>
                <SideNav />
            </Grid>
            <Grid item xs={10}>
                <TopNav log={handleLogout} />
            </Grid>        
        </Grid>
    )
}

export default Dashboard
