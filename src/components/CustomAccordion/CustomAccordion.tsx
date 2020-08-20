import React, { FC, useState } from 'react';
import {
  Theme,
  Typography,
  withStyles,
  Accordion as MuiExpansionPanel,
  AccordionSummary as MuiExpansionPanelSummary,
  AccordionDetails as MuiExpansionPanelDetails,
} from '@material-ui/core';
import { Props } from './CustomAccordion.interface';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './CustomAccordion.styles'

export const ExpansionPanelSummary = withStyles((theme: Theme) => ({
  root: {
    marginBottom: -1,
    minHeight: 32,
    color: theme.palette.primary.main,
    '&$expanded': {
      minHeight: 32,
    },
    '&:hover': {
      color: theme.palette.primary.main,
    }
  },
  content: {
    display: 'flex',
    margin: 0,
    '&$expanded': {
      margin: 0,
    },
  },
  expanded: {},
}))(MuiExpansionPanelSummary);

export const ExpansionPanel = withStyles({
  root: {
    boxShadow: 'none',
    width: '100%',
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 0,
    },
  },
  expanded: {},
})(MuiExpansionPanel);

export const ExpansionPanelDetails = withStyles((theme: Theme) => ({
  root: {
    padding: '6px 16px',
  },
}))(MuiExpansionPanelDetails);

const CustomAccordion: FC<Props> = (props) => {
  const { title, summary, open, onOpenChange, icon } = props;
  const [id] = useState(() => Math.random());
  const classes = useStyles();
  return (
    <ExpansionPanel square expanded={open} onChange={() => onOpenChange(!open)}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id={`${id}`}>
        {icon}
        <Typography style={{ marginLeft: icon ?8:0 }} className={classes.label}>{title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ flexDirection: 'column' }}>{summary}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default CustomAccordion;
