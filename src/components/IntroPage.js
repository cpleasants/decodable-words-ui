import { Box, Typography, Stack, Button, Link } from '@mui/material'; 
import { Link as RouterLink } from 'react-router-dom';

const IntroPage = () => {
  return (
    <Box>
      <Typography variant="h2">Welcome to the Word Generator</Typography>
      <Typography variant="body1">Choose how you would like to generate words:</Typography>
      <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
        <Button variant="contained" component={RouterLink} to="/by-level">
          By Level
        </Button>
        <Button variant="contained" component={RouterLink} to="/manual-selection">
          Manual Selection
        </Button>
      </Stack>
    </Box>
  )
}

export default IntroPage;