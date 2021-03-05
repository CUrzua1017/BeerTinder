import React from "react";
import Typography from "@material-ui/core/Typography";

import { withStyles } from '@material-ui/core/styles';

// const styles = theme => ({
//   root: {
//     display: "flex",
//     flexDirection: "column"
//   },
//   image: {
//     width: "100%",
//     maxHeight: 400,
//     height: "auto"
//   },
//   img: {
//     width: "100%",
//     maxHeight: 400,
//     height: "auto"
//   },
//   titleBackground: {
//     backgroundColor: theme.palette.common.black,
//     top: -130,
//     position: "relative",
//     opacity: 0.4,
//     height: 70
//   },
//   title: {
//     position: "relative",
//     top: -80,
//     zIndex: 100
//   }
// });

const styles = theme => ({
        image: {
            width: "80%",
            height: "auto"
        },
        img: {
            width: "80%",
            height: "auto"
        },
        titleBackground: {
            backgroundColor: theme.palette.common.black,
            top: -130,
            position: "relative",
            opacity: 0.4,
            height: 70
        },
        title: {
            position: "relative",
            top: -80,
            zIndex: 100
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

    });

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // const classes = useStyles();

const Image = ({ classes, src, alt, title }) => (
  <div className={classes.root}>
    <div className={classes.image}>
      <img src={src} alt={alt} className={classes.img} />
    </div>
    <div className={classes.title}>
      <Typography align="center" color="inherit">
        {title}
      </Typography>
    </div>
    <div className={classes.titleBackground} />
  </div>
);

export default withStyles(styles)(Image);