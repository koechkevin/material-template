import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.grey['400']}`,
      backgroundColor: theme.palette.primary.main
    },
    mobileToolbar: {
      backgroundColor: theme.palette.primary.dark
    },
    root: {
      overflow: 'auto',
      height: '100%',
      minWidth: 308,
    },
    link: {
      height: 32,
      padding: 8,
      boxSizing: 'border-box',
      lineHeight: '18px',
      color: theme.palette.common.black,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      }
    }
  }),
);
