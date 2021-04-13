import React from 'react'
import {Grid} from '@material-ui/core'
import SideNav from './SideNav'
import TopNav from './TopNav'
import {useSelector, useDispatch} from 'react-redux'
import {getUser} from '../../redux/actions/userActions'
import {getHeadlines} from '../../redux/actions/headlinseActions'
import Headlinesblock from './Headlinesblock'



const Dashboard = ({history}) => {
    
    const dispatch = useDispatch();
    const User = useSelector((state) => state.user);
    const Headlines = useSelector((state) => state.headlines);

   

    React.useEffect(() => {
        dispatch(getUser())
        dispatch(getHeadlines())
        if(!localStorage.getItem("authToken")){
            history.push("/login")
        }
    }, [dispatch, history])

    const handleLogout = () => {
        localStorage.removeItem("authToken")
        history.push("/login")
    }
    console.log(User)
    return (
        <Grid container direction="row" spacing={2}>
            <Grid item xs={2}>
                 {User.loading ? (
                     <SideNav username={"loading"} /> )
                     : <SideNav username={User.user.username} />
                 }
            </Grid>
            <Grid item xs={10}>
                <Grid container direction="column">
                    <Grid item xs={12}>
                    <TopNav log={handleLogout} />
                    </Grid>
                  
                    <Grid item xs={12}>
                        <Headlinesblock Headlines={Headlines} />
                    </Grid>
                </Grid>
            </Grid>        
        </Grid>
    )
}

export default Dashboard
