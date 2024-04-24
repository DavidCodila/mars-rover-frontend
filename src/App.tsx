import './App.css'
import '@fontsource/roboto/300.css';
import { Container, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

function App() {

  return (
    <>
    <Container maxWidth="sm">
    <Typography sx={{textAlign : "center", marginTop: 4}} variant="h1" gutterBottom>
      Mars Rover App
    </Typography>
    <Typography sx={{textAlign: "center", marginTop: 10}} variant='h5'>
      How big is your map?
    </Typography>
    <TextField sx = {{marginLeft : 20, marginTop: 2}} id="numberOfSquares" label="Enter squares per side" variant="outlined" />
    </Container>
    </>
  )
}

export default App
