import React from 'react';
import "./Header.css";
import {Link} from '@reach/router';

import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            },
            menuButton: {
            marginRight: theme.spacing(2),
            },
            title: {
            flexGrow: 1,
            },
        }));
        const classes = useStyles();

    return (

        <div className={classes.root}>
        <AppBar 
            position="static"
            style={{ background: 'transparent', boxShadow: 'none'}}>
            <Toolbar>
                <Link to="/beers/welcome">
                    <img 
                        className="header_logo"
                        src = {process.env.PUBLIC_URL + '/images/beer_tinder_logo.png'} 
                        alt ="Beer Tinder Logo" />
                </Link>
                <Link to="/beers">
                    <IconButton>
                        <PersonRoundedIcon fontSize="large"/>
                    </IconButton>
                </Link>
            </Toolbar>
            </AppBar>
        </div>
        // <div className="header">
        //     <Link to="/beers/welcome">

        //         <img 
        //             className="header_logo"
        //             src = {process.env.PUBLIC_URL + '/images/beer_tinder_logo.png'} 
        //             alt ="Beer Tinder Logo" />

        //     </Link>
        //     <IconButton>
        //         <PersonRoundedIcon fontSize="large"/>
        //     </IconButton>

        // </div>
    )
}
export default Header;