import React, {useState} from 'react';

import './TinderCards.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import IconButton from '@material-ui/core/IconButton'

function TinderCards() {

    const [beerCard, setBeerCard] = useState([
        {
            name: 'Fremont Lush IPA',
            url: 'https://www.beeroftheday.com/photos/lush_ipa-2689_0.jpg'
        },
        {
            name: 'Georgetown Bodi',
            url: 'https://www.beeroftheday.com/photos/bodhizafa_ipa-3085_0.jpg'
        },
        {
            name: 'Georgetown Bodi',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyIJ9oYXsMTmLVkb10AqmMM_VUCw7RxXmYXQ&usqp=CAU'
        }
    ]);
    const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    });


    const classes = useStyles();

    return (
        <div className="container">
            {beerCard.map((beerCard) => (
                <div className="beerCard">
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image= {beerCard.url}
                        title= {beerCard.name}
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {beerCard.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton>
                        <CheckCircleOutlineIcon fontSize="large"/>
                    </IconButton>
                    <IconButton>
                        <BookmarkBorderRoundedIcon fontSize="large"/>
                    </IconButton>
                    <IconButton>
                        <ShareRoundedIcon fontSize="large"/>
                    </IconButton>
                </CardActions>
                </Card>
                </div>
            ))}
        </div>
    );
}
export default TinderCards;




    // return(
    //     <div>
    //         {beerCard.map((beerCard) => (
    //                 <div 
    //                     style = {{ backgroundImage: `url(${beerCard.url})`}}
    //                     className="beer-card"
    //                 >
    //                     <h3> {beerCard.name}</h3>
    //                 </div>
    //         ))} 

    //     </div>
    // )
