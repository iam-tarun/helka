import React from 'react'
import * as material from "@material-ui/core"
import {useSelector, useDispatch} from 'react-redux'
import FileBase64 from 'react-file-base64'
import {createProfile, updateProfile} from '../../redux/actions/profileActions'
import {useHistory} from 'react-router-dom'

const useStyles = material.makeStyles((theme) => ({
    root:{
        margin: theme.spacing(3)
    }
}))

const Profile = () => {
    const profile = useSelector(state => state.profile)
    const history = useHistory()
    const dispatch = useDispatch()
    const [image, setImage] = React.useState("")
    const classes = useStyles()
    const [phone, setPhone] = React.useState("")
    const [desc, setDesc] = React.useState("")
    console.log(profile.error)
    const handleProfile = (e) => {
        e.preventDefault()
        if(profile.profile){
            if(phone === ""){
                setPhone(profile.profile[0].phoneNumber)
            }
            if(image === ""){
                setImage(profile.profile[0].photo)
            }
            if(desc === ""){
                setDesc(profile.profile[0].desc)
            }
            dispatch(updateProfile({phoneNumber:phone, photo: image, desc, id:profile.profile[0]._id}))
            history.push("/dashboard")

        }
        else{
            dispatch(createProfile({phoneNumber:phone, photo:image, desc}))
            history.push("/dashboard")
        }
    }

    return (
        <div className={classes.root} >
            <material.Typography variant="h5">Profile</material.Typography>
                <form onSubmit={handleProfile} >
                <material.Grid container direction="row" alignItems="center">
                <material.Grid item xs={6}>
                <material.Grid container spacing={2} direction='column' alignItems="center" >
                    <material.CardMedia 
                        component="img"
                        title="profile"
                        src={image}
                        style={{height:'200px', width:'200px', borderRadius:"50%"}}
                    />
                    <FileBase64
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setImage(base64)}
                    />
                        <material.Grid item xs={12}>
                            <material.TextField type="tel" label="phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </material.Grid>
                        <material.Grid item xs={12}>
                            <material.TextField type="text" label="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
                        </material.Grid>
                        <material.Grid item xs={12}>
                            <material.Button type="submit" >Update</material.Button>
                        </material.Grid>
                    </material.Grid>
                </material.Grid>
                <material.Grid item xs={6}>
                    {profile.loading ? <h2>Loading...</h2> : profile.error ? profile.error : profile.profile.length === 0 ? <h2>Loading...</h2>  :  (
                    <material.Grid container spacing={2} direction="column" alignItems="center" justify="center" style={{textAlign:"center"}}>
                        <material.CardMedia 
                            component="img"
                            title="DP"
                            src={profile.profile[0].photo}
                            style={{height:'200px', width:'200px', borderRadius:"50%"}}
                        />
                        <material.Grid item xs={12}>
                            <material.Typography>{profile.profile[0].phoneNumber}</material.Typography>
                        </material.Grid>
                        <material.Grid item xs={12}>
                            <material.Typography>{profile.profile[0].desc}</material.Typography>
                        </material.Grid>
                    </material.Grid>
                    )}
                </material.Grid>
                </material.Grid>
                </form>
        </div>
    )
}

export default Profile
