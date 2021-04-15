import React from 'react'
import * as material from '@material-ui/core'
import {useHistory} from 'react-router-dom'

const useStyles = material.makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4)
    }
}))

const Headline = () => {
    const history = useHistory()
    const headline = history.location.state
    const classes = useStyles()
    return (
        <material.Grid className={classes.root} alignItems="center" direction="column" container spacing={2}>
            <material.Grid item xs={12}><material.Typography variant="h4" >{headline.title}</material.Typography></material.Grid>
            <material.Grid item xs={4}>
                <material.Card>
                    <material.CardMedia 
                        component="img"
                        src={headline.urlToImage}
                        title={headline.title}
                    />
                </material.Card>
            </material.Grid>
            <material.Grid item xs={12}><material.Typography variant="body1" >{headline.description}</material.Typography></material.Grid>
            <material.Grid item xs={12}><material.Typography variant="body2" >{headline.content}</material.Typography></material.Grid>
            <material.Grid container alignItems="center" justify="space-between" direction="row" spacing={2}>
                    <material.Grid item xs={4}><material.Typography>Author: {headline.author}</material.Typography></material.Grid>
                    <material.Grid item xs={4}><material.Typography>published At: {headline.publishedAt}</material.Typography></material.Grid>
                    <material.Grid item xs={4}><material.Link href={headline.url} target="_blank" >Source: {headline.source.name}</material.Link></material.Grid>
            </material.Grid>
        </material.Grid>
    )
}

export default Headline
