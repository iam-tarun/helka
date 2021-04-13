import React from 'react'
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography, makeStyles, CardActions, Button, MenuItem, TextField} from '@material-ui/core'
import {changeHeadlines} from '../../redux/actions/headlinseActions'
import {useDispatch} from 'react-redux'

const useStyles = makeStyles((theme) => ({
    media: {
        height: "180px",
    },
    card: {
       
    }
}))

const categories = [
    {
        value: 'bussiness',
        label: 'bussiness'
    },
    {
        value: 'entertainment',
        label: 'entertainment'
    },
    {
        value: 'general',
        label: 'general'
    },
    {
        value: 'health',
        label: 'health'
    },
    {
        value: 'science',
        label: 'science'
    },
    {
        value: 'sports',
        label:'sports'
    },
    {
        value: 'technology',
        label: 'technology'
    }
]

const countries = [
    {
        value: "ae",
        label: "United Arab Emirates"
    },
    {
        value: "ar",
        label: "Argentina"
    },
    {
        value: "at",
        label: "Austria"
    },
    {
        value: "au",
        label: "Australia"
    },
    {
        value: "be",
        label: "Belgium"
    },
    {
        value: "bg",
        label: "Bulgaria"
    },
    {
        value: "br",
        label: "Brazil"
    },
    {
        value: "ca",
        label: "Canada"
    },
    {
        value: "ch",
        label: "Switzerland"
    },
    {
        value: "cn",
        label: "China"
    },
    {
        value: "co",
        label: "Columbia"
    },
    {
        value: "cu",
        label: "Cuba"
    },
    {
        value: "cz",
        label: "Czechia"
    },
    {
        value: "de",
        label: "Germany"
    },
    {
        value: "eg",
        label: "Egypt"
    },
    {
        value: "fr",
        label: "France"
    },
    {
        value: "gb",
        label: "United Kingdom"
    },
    {
        value: "gr",
        label: "Greece"
    },
    {
        value: "hk",
        label: "Hong Kong"
    },
    {
        value: "hu",
        label: "Hungary"
    },
    {
        value: "id",
        label: "Indonesia"
    },
    {
        value: "ie",
        label: "Ireland"
    },
    {
        value: "il",
        label: "Israel"
    },
    {
        value: "in",
        label: "India"
    },
    {
        value: "it",
        label: "Italy"
    },
    {
        value: "jp",
        label: "Japan"
    },
    {
        value: "kr",
        label: "South Korea"
    },
    {
        value: "lt",
        label: "Lithuania"
    },
    {
        value: "lv",
        label: "Latvia"
    },
    {
        value: "ma",
        label: "Morocco"
    },
    {
        value: "mx",
        label: "Mexico"
    },
    {
        value: "my",
        label: "Malaysia"
    },
    {
        value: "ng",
        label: "Nigeria"
    },
    {
        value: "nl",
        label: "Netherlands"
    },
    {
        value: "no",
        label: "Norway"
    },
    {
        value: "nz",
        label: "New Zealand"
    },
    {
        value: "ph",
        label: "Philippines"
    },
    {
        value: "pl",
        label: "Poland"
    },
    {
        value: "pt",
        label: "Portugal"
    },
    {
        value: "ro",
        label: "Romania"
    },
    {
        value: "rs",
        label: "Serbia"
    },
    {
        value: "ru",
        label: "Russia"
    },
    {
        value: "sa",
        label: "Saudi Arabia"
    },
    {
        value: "se",
        label: "Sweden"
    },
    {
        value: "sg",
        label: "Singapore"
    },
    {
        value: "si",
        label: "Slovenia"
    },
    {
        value: "sk",
        label: "Slovakia"
    },
    {
        value: "th",
        label: "Thailand"
    },
    {
        value: "tr",
        label: "Turkey"
    },
    {
        value: "tw",
        label: "Taiwan"
    },
    {
        value: "ua",
        label: "Ukraine"
    },
    {
        value: "us",
        label: "United States"
    },
    {
        value: "ve",
        label: "Venezuela"
    },
    {
        value: "za",
        label: "South Africa"
    },
    

]

const Headlinesblock = ({Headlines}) => {
    const classes = useStyles()   
    localStorage.setItem('country', 'in')
    localStorage.setItem('category', 'general')
    const [category, setCategory] = React.useState(localStorage.getItem('category'))
    const [country, setCountry] = React.useState(localStorage.getItem('country'));
    const dispatch = useDispatch()
    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
        localStorage.setItem('category', e.target.value)    
    }
    const handleCountryChange = (e) => {
        setCountry(e.target.value)
        localStorage.setItem('country', e.target.value)
    }
    const handleHeadlines = () => {
        dispatch(changeHeadlines(category, country))
    }
    return (
        <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="h3" >Headlines</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                select
                                label="category"
                                value={category}
                                onChange={handleCategoryChange} 
                                variant="outlined"
                                size="small"
                            >
                                {categories.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))} 
                            </TextField>
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                select
                                label="country"
                                value={country}
                                onChange={handleCountryChange} 
                                variant="outlined"
                                size="small"
                            >
                                {countries.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))} 
                            </TextField>
                        </Grid> 
                        <Grid item xs={2}>
                            <Button onClick={handleHeadlines} >Change</Button>
                        </Grid>
            {Headlines.loading ? <Grid item xs={12}> Loading... </Grid> : !Headlines.length ? 
                 Headlines.headlines.map((headline, index) => (
                <Grid item xs={4} key={index} className={classes.card} > 
                <Card>
                    <CardActionArea>
                        <CardMedia 
                            component="img"
                            className={classes.media}
                            src={headline.urlToImage}
                            title={headline.title}
                        />
                        <CardContent>
                            <Typography component="p" >
                                {headline.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" >
                            share
                        </Button>
                        <Button size="small" onClick={headline.url} >
                            go to website
                        </Button>
                    </CardActions>
                </Card>
                </Grid>
            )) : <Grid item xs={12}> No Headlines in {country} of {category} category </Grid> }
        </Grid>
    )
}

export default Headlinesblock

