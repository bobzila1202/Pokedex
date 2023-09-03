import { useAuth } from "../../contexts";
import PokeForm from "../Form";
import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
import PokeCard from "../Pokecard";
import { pokemonDataContext } from "../../contexts/data";

export default function Home() {
  const { user } = useAuth();
  const { setPokemonData } = pokemonDataContext();
  const [submitValue, setSubmitValue] = useState("");

  const pokeSubmit = async () => {
    try {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${submitValue}`
          );
          console.log(response.data)
          console.log(response.data.types[0].type.name)
          return response.data;
          
    } catch (error) {
        console.log(error.message)
    }
  };

  useEffect(() => {
    if (!submitValue) return;
    pokeSubmit().then(data => setPokemonData(data));
  }, [submitValue]);

  return (
    <>
      <h1>{user}'s Personal Pokedex</h1>
      <PokeForm setSubmitValue={setSubmitValue} />
      <PokeCard />
    </>
  );
}
