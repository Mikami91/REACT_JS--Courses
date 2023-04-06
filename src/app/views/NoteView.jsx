import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
// Components
import { ImageGallery } from '../components';

const NoteView = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>
          Dark Souls
        </Typography>
      </Grid>
      <Grid item>
        <Button color='primary' sx={{ padding: 2 }}>
          Save
          <SaveOutlined sx={{ fontSize: 30, ml: 1 }} />
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type='text'
          variant='filled'
          placeholder='Insert a title'
          label='Title'
          sx={{ border: 'none', mb: 1 }}
          fullWidth
        />
        <TextField
          type='text'
          variant='filled'
          placeholder='Insert description'
          sx={{ border: 'none', mb: 1 }}
          minRows={5}
          fullWidth
          multiline
        />
        <ImageGallery />
      </Grid>
    </Grid>
  );
};

export default NoteView;
