import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import arrow from '../../assets/icons/arrow.png'

const useStyles = makeStyles((theme) => ({
    card: {
        width: '100%',
        [theme.breakpoints.up("lg")]: {
            width: '80%',
        },
        margin: 'auto',
        height: '100%',
        textAlign: 'center',
        right: '75%',
        transform: 'translateX(75%)',
        color: '#00287b',
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    coursesImageContainer: {
        position: 'absolute',
        top: '0',
        width: '60%',
        height: 241,
        [theme.breakpoints.up("lg")]: {
            height: 301,
        },
        [theme.breakpoints.up("xl")]: {
            height: 401,
        },
    },
    coursesDetailsContainer: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '60%',
        height: 189,
    },
    coursesContentContainer: {
        position: 'relative',
        width: '100%',
        height: 241,
        [theme.breakpoints.up("lg")]: {
            height: 301,
        },
        [theme.breakpoints.up("xl")]: {
            height: 401,
        },
    },
    knowMoreContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 2,
        left: 0,
        right: 0,
        padding: '20px',
        textDecoration: 'none',
        color: '#00BDFF',
        "&:hover, &:focus, &:active": {
            color: '#00287B'
        }
    },
    knowMoreIcon: {
        width: '20',
        height: '20',
        marginLeft: '10px'
    }
}));

const CoursesContent = ({ mainHeading, subHeading, link, image }) => {
    const classes = useStyles();
    return (

        <>
            <div className={classes.coursesContentContainer}>
                <img className={classes.coursesImageContainer} alt={`${mainHeading}-logo`} src={image} />
                <div className={classes.coursesDetailsContainer}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h5" align='center'>
                                {mainHeading}
                            </Typography>
                            <Typography variant="h6" >
                                {subHeading}
                            </Typography>
                            <CardActions>
                                <a
                                    className={classes.knowMoreContainer}
                                    href={link}
                                >
                                    <Typography variant="body1" align='center'>
                                        Learn more
                                    </Typography>
                                    <img className={classes.knowMoreIcon} alt='know more' src={arrow} />
                                </a>
                            </CardActions>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default CoursesContent;
