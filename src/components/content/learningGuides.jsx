import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import arrow from '../../assets/icons/arrow.png'

const useStyles = makeStyles((theme) => ({
    card: {
        width: '85%',
        margin: 'auto',
        height: '100%',
        color: '#00287b',
        textAlign: 'center'
    },
    title: {
        fontSize: 14
    },
    imageContainer: {
        position: 'absolute',
        top: '0',
        width: '100%',
        aspectRatio: '3/2',
    },
    detailsContainer: {
        position: 'absolute',
        bottom: '0',
        left: 0,
        right: 0,
        width: '100%',
        height: 189,
    },
    learningGuideContentContainer: {
        position: 'relative',
        width: '100%',
        margin: 'auto',
        aspectRatio:'100/87 !important',
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

const LearningGuideContent = ({ mainHeading, subHeading, link, image }) => {
    const classes = useStyles()
    return (

        <>
            <div className={classes.learningGuideContentContainer}>
                <img className={classes.imageContainer} alt={`${mainHeading}-logo`} src={image} />
                <div className={classes.detailsContainer}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h5" align='center'>
                                {mainHeading}
                            </Typography>
                            <Typography variant="h6" className={classes.pos}>
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

export default LearningGuideContent;
