import { Grid } from '@material-ui/core'
import React from 'react'

const About = () => {
    return (
        <div>
            <hr style={{ marginTop: 169 ,marginBottom: 69, width:"70%", opacity:'0.6'}}/>
            <Grid style={{textAlign:'left', marginLeft:100}} container spacing={4}>
                <Grid xs={6} sm={3}>
                    <p><b>Products </b></p>
                    <p><a href="#">Subscription Management</a></p>
                    <p><a href="#">Recurring payments</a></p>
                    <p><a href="#">Enterprise Billing</a></p>
                    <p><a href="#">Integrations</a></p>
                </Grid>
                <Grid  xs={6} sm={3}>
                     <p><b>Help & Support</b></p>
                    <p><a href="#">Subscription Management</a></p>
                    <p><a href="#">Recurring payments</a></p>
                    <p><a href="#">Enterprise Billing</a></p>
                    <p><a href="#">Integrations</a></p>
                </Grid>
                <Grid  xs={6} sm={3}>
                    <p><b>Resources </b></p>
                    <p><a href="#">Subscription Management</a></p>
                    <p><a href="#">Recurring payments</a></p>
                    <p><a href="#">Enterprise Billing</a></p>
                    <p><a href="#">Integrations</a></p>
                    
                </Grid>
                <Grid  xs={6} sm={3}>
                     <p><b>Company </b></p>
                    <p><a href="#">Subscription Management</a></p>
                    <p><a href="#">Recurring payments</a></p>
                    <p><a href="#">Enterprise Billing</a></p>
                    <p><a href="#">Integrations</a></p>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default About
