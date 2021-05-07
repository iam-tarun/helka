import React from "react";
import { Grid } from "@material-ui/core";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/actions/userActions";
import { getHeadlines } from "../../redux/actions/headlinseActions";
import { getChannels } from "../../redux/actions/sourcesActions";
import {getProfile} from '../../redux/actions/profileActions'
import Headlinesblock from "./Headlinesblock";
import { Switch } from "react-router-dom";
import PrivateRoute from "../protectRoutes/PrivateRoute"
import Bookmarks from "./Bookmarks";
import Headline from "./Headline";
import Channels from "./Channels";
import Search from './Search';
import './dashboard.css'
import { getBookmarks } from "../../redux/actions/bookmarkActions";
import Bookmark from "./Bookmark";
import Profile from "./Profile"

const Dashboard = ({ history }) => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.user);
  const Headlines = useSelector((state) => state.headlines);

  if (!localStorage.getItem("authToken")) {
    history.push("/login");
  }

  React.useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/login");
    }
    dispatch(getUser());
    dispatch(getHeadlines());
    dispatch(getChannels());
    dispatch(getBookmarks());
    dispatch(getProfile());
  }, [dispatch, history]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };

  return (
    <div className='main' >
      <Grid container direction="row" style={{margin:0, padding:0}} >
      <Grid item xs={2}>
        {User.loading ? (
          <SideNav username={"loading"} />
        ) : (
          <SideNav username={User.user.username} />
        )}
      </Grid>
      <Grid item xs={9}>
        <Grid container direction="column">
          <Grid item xs={12} style={{marginTop:10}} >
            <TopNav log={handleLogout} />
          </Grid>
          <Grid item xs={12}>
            <Switch>
              <PrivateRoute path="/dashboard/bookmarks" exact component={Bookmarks} />
              <PrivateRoute path="/dashboard/bookmark" exact component={Bookmark} />
              <PrivateRoute path="/dashboard/profile" exact component={Profile} />
              <PrivateRoute path="/dashboard/headline" exact component={Headline} />
              <PrivateRoute path="/dashboard/channels" exact component={Channels} />
              <PrivateRoute path="/dashboard/search" exact component={Search} />
              <PrivateRoute path="/dashboard">
                <Headlinesblock Headlines={Headlines} />
              </PrivateRoute>
            </Switch>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </div>
    
  );
};

export default Dashboard;
