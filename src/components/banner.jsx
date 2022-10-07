import React from "react";
import banner from '../assets/Banner.jpg'
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    bannerContainer: {
        width: '100%',
        height: "400px",
        backgroundSize: 'cover',
        backgroundImage: `url(${banner})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    bannerHeading: {
        width: 'max-content',
        height: '253px',
        position: 'absolute',
        alignContent:'center',
        padding: '45px 5% 45px 3%',
        background: '#162965',
        color: 'white',
        margin:'74px 140px 73px',
        [theme.breakpoints.up("xs")]: {
            marginLeft:'60px',
        },
        [theme.breakpoints.up("md")]: {
            marginLeft:'80px',
        },
        [theme.breakpoints.up("lg")]: {
            marginLeft:'140px',
        },
        [theme.breakpoints.up("xl")]: {
            
        },
    },
}));

const Banner = () => {
    const classes = useStyles()
    return (
        <div
            className={classes.bannerContainer}>
            <div className={classes.bannerHeading}>
                <Typography className={classes.bannerHeadingContent} variant="h4" align='left'>
                    Sapiens
                    <br />
                    University
                </Typography>
            </div>
        </div>
    );
};

export default Banner;
