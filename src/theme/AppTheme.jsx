import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
// Theme
import theme from './theme';

const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
