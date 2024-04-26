import { Container } from '@mui/material';
import { useEffect, useState } from 'react';


export default function GamePage() {
    const [mapSize, setMapSize] = useState(0);
    useEffect(() => {
        var URL = "http://localhost:80/getMapSize";
        fetch(URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => response.json())
        .then(data => {
            setMapSize(data.mapSize);
        })
        .catch(error => {
          console.error(error);
        });
  }, [])

    return (
        <>
        <h1>
        <Container maxWidth="sm">
            Game Page!
            Map Size is: {mapSize}
        </Container>
        </h1>
        </>
    ) 
}