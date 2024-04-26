import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { id } from './id';


export default function GamePage() {
    const [mapSize, setMapSize] = useState(0);
    useEffect(() => {
        const userID = id[id.length - 1];
        console.log("User id: " + userID)
        var URL = "http://localhost:80/getMapSize/" + userID;
        console.log(URL);
        fetch(URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.body)
            setMapSize(data.mapSize);
        })
        .catch(error => {
            console.log("Error in API call ")
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