import React from "react"
import Typography from "@material-ui/core/Typography"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import videoThumb from '../assets/video.png'
import video from '../assets/video.mp4'


const useStyles = makeStyles((theme) => ({
    welcomeContainer: {
        width: '100%',
        height: "max-content",
        background: 'white',
        padding: '50px',
        boxSizing: 'border-box',
        color: '#00287b',
        [theme.breakpoints.down("sm")]: {
            padding: '0px',
        },
    },
    welcomeTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(3),
    },
    welcomeVideo: {
        width: '100%'
    },
}))

const Welcome = () => {
    const classes = useStyles()
    return (
        <Grid
            container
            spacing={12}
            justify="center"
            className={classes.welcomeContainer}
        >
            <Grid className={classes.welcomeTextContainer} item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography className={classes.welcomeHeading} variant="h4" align='center'>
                    Welcome to the Sapiens University Portal!
                </Typography>
                <Typography className={classes.welcomeSubheading} variant="h6" align='center'>
                    Step inside to discover learning adventures, milestones to cross, the tools you need and a supporting team.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <video poster={videoThumb} className={classes.welcomeVideo} controls src={video}>
                </video>
            </Grid>

        </Grid>
    )
}

export default Welcome
