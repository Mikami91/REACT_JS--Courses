import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

const FloatButton = () => {
  return (
    <IconButton
      size='large'
      sx={{
        color: 'white',
        backgroundColor: 'primary.main',
        ':hover': { backgroundColor: 'primary.main', opacity: 0.9 },
        position: 'fixed',
        right: 50,
        bottom: 50,
      }}
    >
      <AddOutlined sx={{ fontSize: 30 }} />
    </IconButton>
  );
};

export default FloatButton;
