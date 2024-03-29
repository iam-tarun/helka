import React from 'react'
import {useSelector} from 'react-redux'
import {Accordion, AccordionSummary, AccordionDetails, Typography, Link} from '@material-ui/core'
import {ExpandMore} from '@material-ui/icons'
import './channels.css'

const Channels = () => {
    const Sources = useSelector((state) => state.sources)
    const {loading, channels, error} = Sources
    return (
        <div style={{maxHeight:"500px", overflowY:"auto", margin:10}} className='example' >
           {loading ? (<h1>Loading...</h1>) : error ? (<h3>{error}</h3>) : channels.map((channel, index) => (
           <Accordion key={index} style={{color:"#33cc33"}} >
                <AccordionSummary
                    expandIcon={<ExpandMore />} 
                    aria-controls="panel1a-content"
                    id="panel1a-content"
                >
                    <Typography>{channel.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {channel.description} <br />
                        <Link style={{textDecoration:"None", color:"black"}} href={channel.url} target="_blank"  >website</Link>
                    </Typography>
                </AccordionDetails>
           </Accordion>
           ))}
        </div>
    )
}

export default Channels
