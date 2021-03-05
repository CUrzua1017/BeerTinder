import React, {useState} from "react";
import SwipeableViews from "react-swipeable-views";
import Image from "./CarouselImages";
import Controls from "./CarouselControls";
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
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

// const styles = {
//   slide: {
//     minHeight: 100,
//     color: "#fff"
//   },
//   slide1: {},
//   slide2: {},
//   slide3: {}
// };

const styles = makeStyles((theme) => ({
    image: {
        width: "80%",
        height: "auto"
    },
    img: {
        width: "80%",
        height: "auto"
    },
    // titleBackground: {
    //     backgroundColor: theme.palette.common.black,
    //     top: -130,
    //     position: "relative",
    //     opacity: 0.4,
    //     height: 70
    // },
    // title: {
    //     position: "relative",
    //     top: -80,
    //     zIndex: 100
    // },
    cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    },
    card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    },
    cardMedia: {
    paddingTop: '56.25%', // 16:9
    },
    cardContent: {
    flexGrow: 1,
    },

}));
function CarouselCards(){
    const beerCard = [
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
    ];
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const classes = styles();

    // class CarouselCards extends React.Component {
        
        function handleChangeIndex() {
            // const state = {
            //   index: 1
            // };
            this.setState({ index });
        };

          const { index } = this.state;

    return (
        <div>
          <SwipeableViews
            enableMouseEvents
            resistance
            index={index}
            onChangeIndex={this.handleChangeIndex}
          >
              <Grid container spacing={4}>
                    {beerCard.map((beerCard) => (
                        <Grid item key={beerCard} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={beerCard.url}
                                title={beerCard.name}
                            />
                            <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {beerCard.name}
                                    </Typography>
                                <Typography>
                                    This is a media card. You can use this section to describe the content.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton>
                                    <CheckCircleOutlineIcon fontSize="small"/>
                                </IconButton>
                                <IconButton>
                                    <BookmarkBorderRoundedIcon fontSize="small"/>
                                </IconButton>
                                <IconButton>
                                    <ShareRoundedIcon fontSize="small"/>
                                </IconButton>
                            </CardActions>
                        </Card>
                        </Grid>
                    ))}
                    </Grid>
            {/* {beerCard.map((beerCard) => (
              <div key={beerCard} style={Object.assign({}, styles.slide)}>
                <Image title={beerCard.name} src={beerCard.url} />
              </div>
            ))} */}
          </SwipeableViews>
          <Controls
            itemsnumber={beerCard.length}
            index={beerCard}
            handleChangeIndex={this.handleChangeIndex}
          />
        </div>
      );
    }
// }}

  
export default CarouselCards;
  