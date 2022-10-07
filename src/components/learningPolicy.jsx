import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    learningPolicyText: {
        padding: theme.spacing(2),
        color: '#00278B',
    }
}));

const LearningPolicyContainer = () => {
    const classes = useStyles()
    return (
        <a
            href={'link'}
        >
            <Typography className={classes.learningPolicyText} variant="body1" align='center'>
                Learning Policy - Understand training and learning opportunities
            </Typography>
        </a>
    );
};

export default LearningPolicyContainer;