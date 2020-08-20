import React, { FC } from 'react';
import { Props } from './SideBar.interface';
import useStyles from './SideBar.styles';
import { Box, Toolbar } from '@material-ui/core';
import { useMedia } from 'react-use';

import SideBarConfig from './SideBarConfig';

const SideBar: FC<Props> = () => {
  const classes = useStyles();
  const isMobile = useMedia('(max-width: 575px)');
  return (
    <Box className={classes.root}>
      <Toolbar className={isMobile ? classes.mobileToolbar : classes.toolbar} />
      <SideBarConfig />
    </Box>
  );
};

export default SideBar;
