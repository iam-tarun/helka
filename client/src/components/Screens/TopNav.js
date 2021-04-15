import { Grid, IconButton, TextField, Button } from '@material-ui/core'
import React from 'react'
import {NotificationsActiveOutlined, ExitToAppOutlined} from '@material-ui/icons'
import {useDispatch} from 'react-redux'
import {search} from '../../redux/actions/searchActions'
import {useHistory} from 'react-router-dom'

const TopNav = ({log}) => {

    const [q, setQ] = React.useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(search(q))
        history.push({pathname: "/dashboard/search", state: {q}})
        setQ('')
        
    }
    return (
        <Grid container  direction="row-reverse">
            <Grid item xs={2}>
               <Grid container direction="row-reverse">
                   <Grid item xs={4}>
                   <IconButton onClick={log} style={{color:"#99e699"}} >
                       <ExitToAppOutlined  />
                    </IconButton>
                   </Grid>
                   <Grid item xs={4}>
                   <IconButton style={{color:"#99e699"}} >
                        <NotificationsActiveOutlined />
                    </IconButton>
                   </Grid>
               </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={6}>
            <form onSubmit={handleSearch}>
                <Grid container direction="row" alignItems="center" spacing={2}>
                    <Grid item xs={11}>
                    <TextField variant="outlined" value={q} onChange={(e) => {setQ(e.target.value)}} fullWidth label="search" size="small" />
                    </Grid>
                    <Grid item xs={1}>
                    <Button variant="outlined" size="small" onClick={handleSearch} >search</Button>
                    </Grid>
                </Grid>
            </form>
            </Grid>
            
        </Grid>
    )
}

export default TopNav
