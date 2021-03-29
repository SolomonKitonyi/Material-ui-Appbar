import React from 'react';
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Home from '@material-ui/icons/Home';
import { InfoOutlined } from '@material-ui/icons';


const Appbar = ()=>{
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));
      const classes = useStyles();
    return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <Link to="/Streams">
              <Home className="classes.menuButton" fontSize="large" variant="filled"/>
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Welcome
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">SignUp</Button>
        </Toolbar>
      </AppBar>
    </div>
    );

};

export default Appbar;