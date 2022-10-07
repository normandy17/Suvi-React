/* eslint-disable array-callback-return */
import React from 'react';
import { makeStyles } from '@material-ui/core'
import CardContent from "../utils/constants/Courses"
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RssFeedIcon from '@material-ui/icons/RssFeed';

const useStyles = makeStyles((theme) => ({
  footerStyles: {
    color: 'white',
    background: '#F4F4F9',
  },
  linkContainer: {
    display: 'flex',
    padding:'2%',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2%',
    paddingTop: '1%'
  },
  aStyles: {
    color: '#686868',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    },
    lineHeight: '180%'
  },
  copyRight: {
    display: 'flex',
    justifyContent: 'right',
    [theme.breakpoints.down("sm")]: {
      justifyContent: 'center',
      textAlign:'center'
    },
    color: 'white',
    padding: '3px',
    paddingRight:'4%',
  },
  footerDivider: {
    marginLeft: '0',
    marginTop: '0',
    width: '25%',
    border: '2px solid #00bdff',
    borderRadius: '5px',
  },
  linksHeading: {
    color: '#0F0D31'
  },
  footerInfo: {
    width:'100%',
    margin:'0px',
    background: '#00278B',
  },
  followContainer: {
    paddingLeft:'4%',
    display: 'flex',
    justifyContent: 'left',
    [theme.breakpoints.down("sm")]: {
      justifyContent: 'center',
    },
    alignItems: 'center',
    color: 'white',
  },
  followText: {
    color: 'white',
    marginRight: '5px',
  },
  sapiensText: {
    color: 'white',
    marginLeft: '5px',
  },
  icon: {
    boxSizing: 'content-box',
    margin: '0 5px 0 5px',
    border: '1px solid white',
    borderRadius: '50%',
    padding: '3px',
    color:'white'
  }
}));

export default function Footer() {

  const classes = useStyles();

  return (
    <footer className={classes.footerStyles}>
      <div className={classes.linkContainer}>
        {CardContent.map((item) => {
          if (item.content)
            return (
              <div key={item.heading} className={classes.links}>
                <h3 className={classes.linksHeading}>{item.heading}</h3>
                <hr className={classes.footerDivider}></hr>
                {item.content?.map((item) => (
                  <a key={item.title} href={item.to} className={classes.aStyles}>{item.title}</a>
                ))}
              </div>
            );
        })}
      </div>
      <Grid
        container
        spacing={5}
        className={classes.footerInfo}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
          <Typography className={classes.followContainer} variant="body1">
            <div className={classes.followText}>Follow us</div>
            <a href="https://twitter.com/SapiensUniv"><TwitterIcon className={classes.icon} /></a>
            <a href="http://www.linkedin.com/in/sapiens-university"><LinkedInIcon className={classes.icon} /></a>
            <a href="https://sapiensed.blogspot.com/"><RssFeedIcon className={classes.icon} /></a>
            <a href='https://sapiens.com/' className={classes.sapiensText}>Sapiens.com</a>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
          <Typography variant="body1" className={classes.copyRight}>Copyright © 2022 Sapiens International. All Rights Reserved.</Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
