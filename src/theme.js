import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#739574',
    },
    secondary: {
      main: teal[900],
    },
    type: 'light',
  },
  typography: {
    fontFamily: 'MuseoModerno',
    body2: {
      fontSize: '0.6rem',
    },
  },
  shape: {
    borderRadius: '10px',
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#739574',
    },
    secondary: {
      main: teal[900],
    },
    type: 'dark',
  },
  typography: {
    fontFamily: 'MuseoModerno',
    body2: {
      fontSize: '0.6rem',
    },
  },
  shape: {
    borderRadius: '10px',
  },
});
