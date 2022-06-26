import React from "react";
import ContentCard from "./ContentCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "../../utils/constants/Courses"

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        padding: "20px 10px",
    }
}));

const Container = () => {
    const classes = useStyles()
    return (
        <Grid
            container
            spacing={1}
            className={classes.gridContainer}
            justify="space-around"
        >
            {CardContent.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
                    <ContentCard
                        icon={item.logo}
                        mainHeading={item.heading}
                        subHeading={item.subHeading}
                        contents={item.content}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default Container;
