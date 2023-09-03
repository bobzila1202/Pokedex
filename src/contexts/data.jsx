import React, { useState, useContext, createContext } from "react";

// create a context
const pokeDataContext = createContext();

// 2nd step - creating the provider 
export const PokeDataProvider = ({ children }) => {
    const [pokemonData, setPokemonData] = useState();

    return (
        <pokeDataContext.Provider value={{ pokemonData, setPokemonData }}>
            {children}
        </pokeDataContext.Provider>
    );
};


// 3rd step - consume the context
export const pokemonDataContext = () => useContext(pokeDataContext);
