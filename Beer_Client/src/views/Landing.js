import React from 'react';
import { motion } from 'framer-motion';
import './Landing.css'
import Video from "./video.mp4";
import Button from '@material-ui/core/Button';
import {Link} from '@reach/router';
import Logo from '../images/beer_tinder_logo.png';


function Landing(props){
    return(
        <div className="landing-container">
            <video autoPlay loop muted
                style={{
                    position: 'absolute',
                    width: '100%',
                    left: '50%',
                    top: '50%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '-1',
                    opacity: '0.9',
                }}
            >
                <source src={Video} type="video/mp4" />
            </video>
            <img src= {Logo} alt="Beer Tinder Logo"/>
            <h3>Find the perfect beer match to bring to your next</h3>
            <h2>Party, Adventure, or Netflix n Chill.</h2>
            <div>
                <Link to="/newuser">
                    <Button variant="outlined" size="large"> Get Started </Button>
                </Link>
            </div>
        </div>
    )
}
export default Landing;