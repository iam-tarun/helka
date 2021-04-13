import { Grid, IconButton, TextField } from '@material-ui/core'
import React from 'react'
import {NotificationsActiveOutlined, ExitToAppOutlined} from '@material-ui/icons'

const TopNav = ({log}) => {
    return (
        <Grid container  direction="row-reverse">
            <Grid item xs={2}>
               <Grid container direction="row-reverse">
                   <Grid item xs={4}>
                   <IconButton onClick={log} >
                       <ExitToAppOutlined  />
                    </IconButton>
                   </Grid>
                   <Grid item xs={4}>
                   <IconButton>
                        <NotificationsActiveOutlined />
                    </IconButton>
                   </Grid>
               </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={6}>
                <TextField variant="outlined" label="search" fullWidth size="small" />
            </Grid>
        </Grid>
    )
}

export default TopNav
