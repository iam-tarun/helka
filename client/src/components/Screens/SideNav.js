import { Avatar, Paper, Grid, makeStyles, Typography, List, ListItemIcon, ListItemText, ListItem, Divider} from '@material-ui/core'
import React from 'react'
import {BookmarkBorderOutlined, HistoryOutlined, SpaceBarOutlined, LiveTvOutlined} from '@material-ui/icons'
import Clock from 'react-live-clock'

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        margin: theme.spacing(4),
    },
    profile: {
        textAlign: "center",
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
                <Grid item xs={12} ></Grid>
                <Grid item xs={12} ></Grid>
                    <List component="nav" >
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <BookmarkBorderOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Bookmarks" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <SpaceBarOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Space" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <LiveTvOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Channels" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <HistoryOutlined />
                            </ListItemIcon>
                            <ListItemText primary="History" />
                        </ListItem>
                        <Divider />
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
