import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "../../utils/constants/Courses"
import LearningGuideContent from "../content/learningGuides";

const useStyles = makeStyles((theme) => ({
    divider: {
        width: '6%',
        border: '2px solid #00bdff',
        borderRadius: '5px',
    },
    learningGuideContainer: {
        width:'100%',
        padding:theme.spacing(5),        
        margin:'0px',
    },
    mainContainer1: {
        background:'#f4f4f9',
        paddingTop:'20px',
        color: '#00287b',
    }
}));

const LearningGuideContainer = () => {
    const classes = useStyles()
    return (
        <section className={classes.mainContainer1}>
            <Typography id="LearningGuides" name="LearningGuides" className={classes.learningGuidesHeading} variant="h4" align='center'>
                {CardContent[0].heading}
            </Typography>
            <hr className={classes.divider}></hr>
            <Typography className={classes.learningGuidesSubHeading} variant="h6" align='center'>
                {CardContent[0].subHeading}
            </Typography>
            <Grid
                container
                spacing={5}
                justify="center"
                className={classes.learningGuideContainer}
            >
                {CardContent[0].content.map((item) => (
                    <Grid key={item.title} item xs={12} sm={6} md={4} lg={4} xl={3}>
                        <LearningGuideContent
                            mainHeading={item.title}
                            subHeading={item.subTitle}
                            link={item.to}
                            image={item.image}
                        />
                    </Grid>
                ))}
            </Grid>
        </section>
    );
};

export default LearningGuideContainer;
