import React, { useContext } from 'react';
import { userContext } from '../context/user-context';

import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
} from '@material-ui/core';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const useStyles = makeStyles(() => ({
  navbar: {
    flexGrow: 1,
    textAlign: 'left',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const updateUser = useContext(userContext).update;
  const user = useContext(userContext).user;
  const { type } = user;
  const handleClick = () => {
    updateUser((prevUser) => {
      return {
        ...prevUser,
        type: type === 'light' ? 'dark' : 'light',
      };
    });
  };

  return (
    <div>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography className={classes.navbar} variant='h6'>
            Num+
          </Typography>
          <IconButton onClick={handleClick}>
            <Brightness4Icon />
          </IconButton>
          <FingerprintIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
