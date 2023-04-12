import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
// Thunks
import { startLogout } from '../../store/auth/thunks';

const NavBar = ({ drawerWidth }) => {
  const dipatch = useDispatch();

  const onLogout = () => dipatch(startLogout());

  return (
    <AppBar
      position='fixed'
      sx={{
        backgroundColor: 'primary.main',
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='h6' noWrap component='div'>
            Journal App
          </Typography>
          <IconButton onClick={onLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {
  drawerWidth: PropTypes.number,
};

NavBar.defaultProps = {
  drawerWidth: 240,
};

export default NavBar;
