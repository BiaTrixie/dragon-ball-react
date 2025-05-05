import { useEffect, useState } from "react";
import { fetchCharacterList } from "../services/CharacterService";
import type { Characters } from "../model/character";
import CharacterCard from "../components/CharacterCard";

export default function CharacterScreen() {
  const [characters, setCharacters] = useState<Characters[]>([]);

  useEffect(() => {
    const getCharacter = async () => {
      const result = await fetchCharacterList();
      setCharacters(result);
    };
    getCharacter();
  }, []);

  return (
    <>
      <CharacterCard characters={characters} />
    </>
  );
}