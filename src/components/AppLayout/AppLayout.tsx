import React, { FC } from 'react';
import { Props } from './AppLayout.interface';
import useStyles from './AppLayout.styles';
import { Box, SwipeableDrawer, Paper } from '@material-ui/core';
import { Header } from '../Header';
import { SideBar } from '../SideBar';
import { useMedia } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../redux/interfaces';
import { openDrawer } from '../../redux/actions/global';

const AppLayout: FC<Props> = (props) => {
  const { children } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const isMobile = useMedia('(max-width: 575px)');
  const open = useSelector((state: ReduxState) => state.global.drawerOpen);
  const setOpen = (val: boolean) => dispatch(openDrawer(val));

  return (
    <Box className={classes.root}>
      {!isMobile && (
        <Paper className={classes.side}>
          <SideBar />
        </Paper>
      )}
      <Box className={classes.main}>
        <Header />
        {isMobile && (
          <SwipeableDrawer
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            className={classes.drawer}
          >
            <SideBar />
          </SwipeableDrawer>
        )}
        <Box style={{ padding: 16 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
