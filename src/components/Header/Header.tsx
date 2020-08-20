import React, { FC } from 'react';
import { Props } from './Header.interface';
import useStyles from './Header.styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@material-ui/core';
import { openDrawer } from '../../redux/actions/global';
import { useDispatch } from 'react-redux';
import { useMedia } from 'react-use';

const Header: FC<Props> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isMobile = useMedia('(max-width: 575px)');

  return (
    <Box className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          {isMobile && (
            <IconButton
              onClick={() => dispatch(openDrawer(true))}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" className={classes.title} />
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
