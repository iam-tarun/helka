import React from 'react'
import * as material from "@material-ui/core"
import {useSelector, useDispatch} from 'react-redux'
import FileBase64 from 'react-file-base64'
import {createProfile, updateProfile} from '../../redux/actions/profileActions'

const useStyles = material.makeStyles((theme) => ({
    root:{
        margin: theme.spacing(3)
    }
}))

const Profile = () => {
    const profile = useSelector(state => state.profile)
    console.log(profile)
    const dispatch = useDispatch()
    let UserProfile = {}
    if (profile.profile) {
        UserProfile = profile.profile
    }
    else{
        UserProfile = {
            phoneNumber: "",
            photo:"",
            desc:"",
        }
    }
    const [image, setImage] = React.useState(UserProfile.photo)
    const classes = useStyles()
    const [phone, setPhone] = React.useState(UserProfile.photo)
    const [desc, setDesc] = React.useState(UserProfile.desc)

    const handleProfile = (e) => {
        e.preventDefault()
        if(profile.profile){
            dispatch(updateProfile({phoneNumber:phone, photo: image, desc}))
        }
        else{
            dispatch(createProfile({phoneNumber:phone, photo:image, desc}))
        }
    }

    return (
        <div className={classes.root} >
            {profile.error ? <h2>Create your profile!!!</h2> : <h2>Profile</h2> }
                <form onSubmit={handleProfile} >
                <material.Grid container direction="row">
                <material.Grid item xs={6}>
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
                </material.Grid>
                <material.Grid item xs={6}>
                    <material.Grid container spacing={2} direction='column' >
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
                </material.Grid>
                </form>
        </div>
    )
}

export default Profile
