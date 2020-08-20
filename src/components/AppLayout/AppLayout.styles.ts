import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  side: {
    height: '100vh',
    flex: 1,
  },
  main: {
    flex: 3,
  },
  drawer: {
    flexShrink: 0,
  }
}));
