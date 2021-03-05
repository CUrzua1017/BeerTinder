import React from 'react';
import "./Header.css";
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import IconButton from '@material-ui/core/IconButton'

function Header() {
    return (
        <div className="header">
            <p>[logo]</p>
            <IconButton>
                <PersonRoundedIcon fontSize="large"/>
            </IconButton>

        </div>
    )
}
export default Header;