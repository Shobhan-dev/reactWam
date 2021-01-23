import React from 'react'
import {Tabs, Tab, Button, makeStyles} from "@material-ui/core"
import { Link } from 'react-router-dom'

const Header = () => {

    const [value, setValue] = React.useState(0)
  
    const handleChange = (event, newValue) => {
      setValue(newValue)
    }

    const useStyles = makeStyles({
        root: {
            marginLeft: '33rem',
            color: '#2d3436',
            
        }
    })
    const classes = useStyles()
    return (
        <div>
            
            {/* <a href="#">logo</a> */}
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Product"/>
                <Tab label="Pricing"/>
                <Tab label="Solutions"/>
                <Tab label="Customers"/>
                <Tab label="Resource"/>
                <div className={classes.root}>
                    <i className='fas fa-user'></i>
                    <Link to='login'>
                        <Button color="Primary">Log in</Button>
                    </Link>
                    
                </div>
            </Tabs>
            
        </div>
    )
}

export default Header
