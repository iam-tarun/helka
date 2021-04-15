import { Avatar, Paper, Grid, makeStyles, Typography, List, ListItemIcon, ListItemText, ListItem} from '@material-ui/core'
import React from 'react'
import {BookmarkBorderOutlined, HistoryOutlined, SpaceBarOutlined, LiveTvOutlined} from '@material-ui/icons'
import Clock from 'react-live-clock'
import {NavLink} from 'react-router-dom'
import * as BsIcons from 'react-icons/bs'

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        margin: theme.spacing(4),
    },
    profile: {
        textAlign: "center",
    },
    link : {
        textDecoration: 'None',
        color: 'black',
    },
}))

const SideNav = ({username}) => {

    const classes = useStyles()

    return (
        <Paper>
            <Grid container alignItems="center" justify="center" direction="column" spacing={4}>
                <Grid className={classes.profile} item xs={12}>
                    <Avatar className={classes.avatar} alt="profile pic" />
                    <Typography>{username}</Typography>
                </Grid>
                <Grid item xs={12} ></Grid>
                    <List component="nav" >
                        
                            <NavLink exact to="/dashboard" className={classes.link} >
                                <ListItem button >
                                <ListItemIcon>
                                    < BsIcons.BsNewspaper />
                                </ListItemIcon>
                                <ListItemText primary="Headlines" />
                                </ListItem>
                            </NavLink>
                        
                            <NavLink exact to="/dashboard/bookmarks" className={classes.link} >
                            <ListItem button  >
                                <ListItemIcon>
                                    <BookmarkBorderOutlined />
                                </ListItemIcon>
                                <ListItemText primary="Bookmarks" />
                            </ListItem>
                            </NavLink> 
                        
                        <NavLink to="/dashboard/space" className={classes.link} >
                        <ListItem button>
                            <ListItemIcon>
                                <SpaceBarOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Space" />
                        </ListItem>
                        </NavLink>
                        <NavLink to="/dashboard/channels" className={classes.link} >
                        <ListItem button>
                            <ListItemIcon>
                                <LiveTvOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Channels" />
                        </ListItem>
                        </NavLink>
                        <ListItem button>
                            <ListItemIcon>
                                <HistoryOutlined />
                            </ListItemIcon>
                            <ListItemText primary="History" />
                        </ListItem>
                
                    </List>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
                    <Typography variant="h4" >
                    <Clock
                            format="HH:mm:ss" 
                            interval={1000}
                            ticking={true}
                        />
                    </Typography>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
            </Grid>
        </Paper>
    )
}

export default SideNav
