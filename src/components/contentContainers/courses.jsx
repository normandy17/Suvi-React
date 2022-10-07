import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "../../utils/constants/Courses"
import CoursesContent from "../content/courses";

const useStyles = makeStyles((theme) => ({
    divider: {
        width: '6%',
        border: '2px solid #00bdff',
        borderRadius: '5px',
    },
    coursesContainer: {
        width:'100%',
        padding:theme.spacing(5),        
        margin:'0px',
    },
    mainContainer2: {
        paddingTop:'20px',
        color: '#00287b',
    }
}));

const LearningGuideContainer = () => {
    const classes = useStyles()
    return (
        <section className={classes.mainContainer2}>
            <Typography id="Courses"  className={classes.coursesHeading} variant="h4" align='center' style={{ width: '100%' }}>
                {CardContent[1].heading}
            </Typography>
            <hr className={classes.divider}></hr>
            <Typography className={classes.coursesSubHeading} variant="h6" align='center' style={{ width: '100%' }}>
                {CardContent[1].subHeading}
            </Typography>
            <Grid
                container
                spacing={5}
                justify="center"
                className={classes.coursesContainer}
            >
                {CardContent[1].content.map((item) => (
                    <Grid key={item.title}  className={classes.cardContainer} item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <CoursesContent
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