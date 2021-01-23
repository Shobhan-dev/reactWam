import React from 'react'
import {Button, makeStyles} from "@material-ui/core"
import SectionOne from './SectionOne'
import About from './About'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

const Landing = () => {

    const useStyles = makeStyles({
        root: {
           
            backgroundColor: '#480ca8',
            marginRight:'2rem',
            
        }
    })
    const classes = useStyles()

    
    return (
        <div>
            <Header/> 
            <div class='txtbox'>
                <p class='txt'>Subcription Billing & Revenue Operations</p>
                <p class='txt1'>for Fast-growth B2B SaaS</p>
                <p class='txt2'>Get the operational sophistication to achieve, sustain,
                    and scale recurring revenue.</p>
                <Button className={classes.root} variant="contained" color="primary">Schedule a Demo</Button>
                <Link to='login'>
                    <Button variant="outlined">Sign up for free</Button>
                </Link>
                
                <div>
                    <p style={{marginTop:'180px'}}>Thousands of Scaling Businesses Love Us</p>
                
                </div>
            <SectionOne />
            <About/>

            </div>
        </div>
    )
}

export default Landing
