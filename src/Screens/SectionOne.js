import React from 'react'
import { makeStyles} from "@material-ui/core"
import Grid from "@material-ui/core/Grid";

const SectionOne = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        control: {
          padding: theme.spacing(2),
        },
        text:{
            width:'18rem',
            fontFamily: 'ubuntu',
            fontSize:'1.3rem',
            lineHeight: '2rem',
            paddingRight:'3rem',
            marginRight:'2rem',
            marginTop: 123,
            textAlign:'left'
        },
        imag:{
            marginTop: 100,
        },
        imag1:{
            marginTop: 150,
            marginRight: 275,
        }
      }))

    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>

                    <Grid item>
                        <p className={classes.text}><b>Automate Recurring Billing </b>
Scale your SaaS through 480+ recurring billing scenarios that automate who you bill, when, and how. No humans, no spreadsheets, no missed payments!</p>
                    </Grid>
                    <Grid className={classes.imag}>
                        <img alt='some svg' src='recurring-billing-graphic.svg'/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>

                    <Grid className={classes.imag1}>
                        <img alt='some svg' src='subscription-graphic.svg'/>
                    </Grid>
                    <Grid item>
                        <p style={{marginTop:'10rem'}} className={classes.text}><b>Smarter Subscription Management </b>
                        Experiment rapidly with pricing structures, product catalogs, and subscription lifecycles with a business-user-first experience.</p>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
        </div>
    )
}

export default SectionOne
