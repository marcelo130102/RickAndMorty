import React from "react";
import "./App.css";
import useSWR from "swr";
import { DataCharacter } from "../types/data";
import Cartilla from "./components/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  return res.json();
};

function App() {
  const response = useSWR("https://rickandmortyapi.com/api/character", fetcher);
  const data = response.data;
  const error = response.error;

  if (error) return <div>Fallo al cargar</div>;
  if (!data) return <div>Cargando...</div>;

  const results = data.results as DataCharacter[];
  return (
    <Container maxWidth="xl" sx={{backgroundColor:"#F5F5F5"}}>
      <Typography variant="h3" component="div" gutterBottom sx={{color:"#02B414", display:"flex", justifyContent:"center"}} mt={5} mb={5}>
        Rick and Morty
      </Typography>
      <Box sx={{ flexGrow: 1, display:"flex", marginBottom:"20px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
          justifyContent="center"
          alignItems="center"
        >
          {results.map((character) => (
            <Grid item xs={2} sm={4} md={4} key={character.id} sx={{display:"flex", justifyContent:"center"}}>
              <Cartilla
                name={character.name}
                image={character.image}
                location={character.location.name}
                status={character.status}
                origen={character.origin.name}
                specie={character.species}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
