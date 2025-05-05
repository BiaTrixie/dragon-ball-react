import { useEffect, useState } from "react";
import type { Planet} from "../model/planet";
import PlanetCard from "../components/PlanetCard";
import { fetchPlanetsList } from "../services/PlanetService";

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
    <>
      <PlanetCard planets={planets} />
    </>
  );
}