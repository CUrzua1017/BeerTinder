import React, {useState, useEffect} from 'react';
import axios from 'axios';

// import './TinderCards.css'
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
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// import BeerLike from '/BeerLike';

function TinderCards() {
    
    
    const useStyles = makeStyles((theme) => ({
        icon: {
            marginRight: theme.spacing(2),
            },
            heroContent: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(8, 0, 6),
            },
            heroButtons: {
            marginTop: theme.spacing(4),
            },
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

        const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);

        const handleExpandClick = () => {
        setExpanded(!expanded);
        };

        const [beerList, setBeerList] = useState(null);
        useEffect(()=>{
            axios.get('http://localhost:8000/api/beers')
                .then(response => setBeerList(response.data))
        },[]);

        function handleLike(index){
            const beerListToUpdate = beerList[index];
            axios.post('http://localhost:8000/api/beers/'+ beerListToUpdate._id+'/likes')
                .then(response => {
                    const updatedBeerList = response.data;
                    const clonedBeerList = beerList.slice();  // creating a copy of the array for better modification
                    clonedBeerList[index] = updatedBeerList;
                    setBeerList(clonedBeerList);
                })
        }
    
        console.log(beerList)
    
        if (beerList === null) return 'Loading...';
        


    return (
        <div className="container">
        <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Beer Dashboard  
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Something short and leading about the collection below—its contents, the creator, etc.
                        Make it short and sweet, but not too short so folks don't simply skip over it
                        entirely.
                    </Typography>
                </Container>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                    {beerList.map((beerList, idx) => (
                        <Grid item key={beerList} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={beerList.image}
                                title={beerList.name}
                            />
                            <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {beerList.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="h6">
                                        {beerList.beerType}
                                    </Typography>
                                <Typography>
                                    {beerList.brewery}
                                    {/* ABV: {beerList.abv} */}
                                    {/* IBU: {beerList.ibu} */}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {/* <BeerLike/> */}
                                <p>{beerList.likes} Likes</p>
                                {/* <button onClick ={() => navigate('/beers/' + beerList._id + '/edit')}>Edit</button> */}
                                <button onClick = {() => handleLike(idx)}>Like</button>
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
                </Container>
            </div>
        </main>

        </React.Fragment>



        
        </div>
    );
}
export default TinderCards;

