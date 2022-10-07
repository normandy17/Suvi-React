import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    divider: {
        width: '6%',
        border: '2px solid #00bdff',
        borderRadius: '5px',
        color: 'white',
    },
    helpContainer: {
        padding: theme.spacing(2),
        boxSizing: 'border-box',
        background:'#00bdff',
        color: 'white',
    }
}));

const HelpContainer = () => {
    const classes = useStyles()
    return (
        <div className={classes.helpContainer}>
            <Typography  id="Help" variant="h6" align='center'>
                Looking for help and support?
            </Typography>           
            <Typography variant="h6" align='center'>
                Contact us at: <a href='mailto:Learning.administration@sapiens.com'>Learning.administration@sapiens.com</a>
            </Typography>
        </div>
    );
};

export default HelpContainer;
