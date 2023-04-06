import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#eb642f',
    },
    secondary: {
      main: '#e5e5e5',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
