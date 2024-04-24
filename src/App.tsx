import './App.css'
import '@fontsource/roboto/300.css';
import { Button, Container, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function App() {
  const [mapSize, setMapsize] = useState("");
  function handleStartGame() {
    var URL = "http://localhost:80/start-game";
    const dataToSend = {"request": mapSize}
      fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })
      .then(response => response.json())
        .then(data => {
          console.log(data);
          //router.navigate("/game");
        })
        .catch(error => {
          console.error(error);
        })
  }

  return (
    <>
    <Container maxWidth="sm">
    <Typography sx={{textAlign : "center", marginTop: 4}} variant="h1" gutterBottom>
    Mars Rover App
    </Typography>
    <Typography sx={{textAlign: "center", marginTop: 10}} variant='h5'>
      How big is your map?
    </Typography>
    <TextField sx = {{marginLeft : 20, marginTop: 2}} id="numberOfSquares" label="Enter squares per side" variant="outlined" onChange={(e)=>setMapsize(e.target.value)}/>
    <Button sx={{ display: "block", marginTop: 2, left :"35%", width: "30%"}} variant="contained" onClick= {handleStartGame}>Start Game!</Button>
    </Container>
    </>
  )
}

export default App
