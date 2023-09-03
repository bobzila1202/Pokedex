import { pokemonDataContext } from "../../contexts/data";
import React from "react";


export default function PokeCard() {
const { pokemonData } = pokemonDataContext(); 
const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };
  
  
  return (
    <>
      {pokemonData && (
        <div className="container">
            <div id="card" style={{background:`radial-gradient(circle at 50% 0%, ${typeColor[pokemonData.types[0].type.name]} 36%, #ffffff 36%)` }}>
            <p className="hp">
            <span>HP</span>
              {pokemonData.stats[0].base_stat  }
          </p>
          <img src={pokemonData.sprites.other.dream_world.front_default} />
          <h2 className="poke-name">{pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1)}</h2>
          <div className="types">
            <span style={{backgroundColor: typeColor[pokemonData.types[0].type.name]}} >
            {pokemonData.types[0].type.name}
            </span>
          </div>
          <div className="stats">
            <div>
              <h3>{pokemonData.stats[1].base_stat}</h3>
              <p>Attack</p>
            </div>
            <div>
              <h3>{pokemonData.stats[2].base_stat}</h3>
              <p>Defense</p>
            </div>
            <div>
              <h3>{pokemonData.stats[5].base_stat}</h3>
              <p>Speed</p>
            </div>
          </div>
            </div>
        </div>
      )}
    </>
  );
}
