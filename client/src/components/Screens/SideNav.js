import {
  Avatar,
  Paper,
  Grid,
  makeStyles,
  Typography,
  List,
  ListItemText,
  ListItem,
} from "@material-ui/core";
import React from "react";

import Clock from "react-live-clock";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    margin: theme.spacing(4),
  },
  profile: {
    textAlign: "center",
  },
  link: {
    textDecoration: "None",
    color: "white",
    "&:hover": {
      color: "#99e699",
    },
  },
  paper: {
    backgroundColor: "black",
    color: "white",
    height:"100vh",
  },
  list: {
    color: "white",
  },
  activeItem: {
    color: "#99e699",
    "&:hover": {
      color: "white",
    },
  },
}));

const SideNav = ({ username }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        spacing={4}
      >
        <Grid className={classes.profile} item xs={12}>
          <Avatar className={classes.avatar} alt="profile pic" />
          <Typography>{username}</Typography>
        </Grid>
        <Grid item xs={12}></Grid>
        <List component="nav">
          <NavLink exact to="/dashboard" className={classes.link} activeClassName={classes.activeItem} >
            <ListItem button>
              <ListItemText primary="Headlines" />
            </ListItem>
          </NavLink>

          <NavLink exact to="/dashboard/bookmarks" className={classes.link} activeClassName={classes.activeItem} >
            <ListItem button>
              <ListItemText primary="Bookmarks" />
            </ListItem>
          </NavLink>

          <NavLink to="/dashboard/profile" className={classes.link} activeClassName={classes.activeItem} >
            <ListItem button>
              <ListItemText primary="Profile" />
            </ListItem>
          </NavLink>
          <NavLink to="/dashboard/channels" className={classes.link} activeClassName={classes.activeItem} >
            <ListItem button>
              <ListItemText primary="Channels" />
            </ListItem>
          </NavLink>
          <ListItem button>
            <ListItemText primary="History" />
          </ListItem>
        </List>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Typography variant="h4">
          <Clock format="HH:mm:ss" interval={1000} ticking={true} style={{color:"#99e699"}} />
        </Typography>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>

      </Grid>
    </Paper>
  );
};

export default SideNav;
