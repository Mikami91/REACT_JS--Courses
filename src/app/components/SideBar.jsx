import PropTypes from 'prop-types';
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const SideBar = ({ drawerWidth }) => {
  const { displayName } = useSelector((state) => state.auth);

  return (
    <Box
      component='nav'
      sx={{
        backgroundColor: 'seconday.main',
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant='permanent' // Tempory
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        <Toolbar color='yellow'>
          <Typography variant='h6' noWrap component='div'>
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {[1, 2, 3, 4, 5].map((i) => (
            <ListItem key={i} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={i} />
                  <ListItemText secondary='...' />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

SideBar.propTypes = {
  drawerWidth: PropTypes.number,
};

SideBar.defaultProps = {
  drawerWidth: 240,
};

export default SideBar;
