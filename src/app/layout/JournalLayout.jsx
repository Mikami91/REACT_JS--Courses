import { Box, Toolbar } from '@mui/material';
// Components
import { NavBar, SideBar } from '../components';

const drawerWidth = 240;

const JournalLayout = ({ children }) => {
  return (
    <Box
      sx={{ display: 'flex', width: '100%' }}
      className='animate__animated animate__fadeIn animate__faster'
    >
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default JournalLayout;
