import { useEffect, useState } from "react";
import type { Planet} from "../model/planet";
import PlanetCard from "../components/PlanetCard";
import { fetchPlanetsList } from "../services/PlanetService";
import { Container } from "@mui/material";

export default function PlanetScreen() {
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    const getPlanets = async () => {
      const result = await fetchPlanetsList();
      setPlanets(result);
    };
    getPlanets();
  }, []);

  return (
    <Container sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      minHeight: '100vh',
      margin: '20px',
      flexDirection: 'column',
    }}>
        <h1>Planets</h1>
      <PlanetCard planets={planets} />
    </Container>
  );
}