import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
    AppBar,
    Toolbar,
    IconButton,
    MenuItem,
    Menu
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import CardContent from "../../utils/constants/Courses";
import logo from '../../assets/Sapiens.png'
import index from '../../utils/constants/Search'
import { TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'

const styles = (theme) => ({
    grow: {
        flexGrow: 1
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    headerLogo:{
        height: 25,
    },
    searchContainer:{
        margin:theme.spacing(0.5, 3, 0.5, 3),
        width:'300px'
    },
    search: {
        position: "relative",
        border: '1px solid #00278b',
        borderRadius: '25px',
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        },
        textDecoration: 'none',
        padding: theme.spacing(0.5, 3, 0.5, 3),
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    navbarLinks: {
        display: 'flex',
        textDecoration: 'none',
        marginLeft: '20px',
        color: '#00287b',
        [theme.breakpoints.up("md")]: {
            fontSize: '18px',
        },
        [theme.breakpoints.up("xl")]: {
            fontSize: '24px',
        },
    }
});

const ToolbarComponent = (props) => {

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(false);
    const [inputValue, setInputValue] = useState("")
    console.log(inputValue)
    const handleMobileMenuOpen = (e) => {
        setMobileMoreAnchorEl(e.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const { classes } = props;

    const mobileMenuId = "primary-search-account-menu-mobile";

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={mobileMoreAnchorEl}
            onClose={handleMobileMenuClose}
        >
            {CardContent.map((item) => (
                <MenuItem key={item.heading} onClick={handleMobileMenuClose}>
                    <a
                        className={classes.navbarLinks}
                        href={item.to}
                    >
                        {item.heading}
                    </a>
                </MenuItem>
            ))}
        </Menu>
    );

    const handleChange = (event, value) => {
        if(value){
            const {to} = index.find((topic) => topic.title === value)                
            console.log(to)
            return window.open(to, "_self")
        }
        
    }


    return (
        <div className={classes.grow}>
            <AppBar position="static" style={{ background: "white" }}>
                <Toolbar>
                    <img className={classes.headerLogo} alt={'title'} src={logo} />
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        {CardContent.map((item) => (
                            <a key={item.heading}
                                className={classes.navbarLinks}
                                href={item.to}
                            >
                                {item.heading}
                            </a>
                        ))}
                    </div>
                    <div className={classes.searchContainer}>
                        <Autocomplete
                            freeSolo
                            id="autocomplete-search"
                            disableClearable
                            inputValue={inputValue}
                            onInputChange={(event, newInputValue) => {
                                setInputValue(newInputValue);
                              }}
                            options={index.map((option) => option.title)}
                            onChange={handleChange}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    className={classes.search}
                                    placeholder="Search..."
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                        endAdornment: !inputValue && <SearchIcon />,
                                        disableUnderline: true
                                    }}
                                />
                            )}
                        />
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="black"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
                {renderMobileMenu}
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(ToolbarComponent);
