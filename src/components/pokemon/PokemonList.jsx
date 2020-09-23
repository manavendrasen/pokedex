import React, { useState, useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/core";

//components
import { PokemonCard } from "./PokemonCard";

//axios
import axios from "../../axios/axios";
const limit = 100;

export const PokemonList = (props) => {
  const { fetchUrl } = props;
  const [pokemon, setPokemon] = useState([]);

  //geting the movies
  useEffect(() => {
    //if [] runs one time and doesnt run again,
    //[pokemon] means when variable changes this will run
    const fetchData = async () => {
      const request = await axios.get(fetchUrl + `?limit=${limit}`);
      // console.log(request.data.results);
      setPokemon(request.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      {pokemon ? (
        <SimpleGrid columns={[2, 2, 3, 5]} spacing={10}>
          {pokemon.map((pokemon, index) => {
            return (
              <PokemonCard index={index + 1} key={index}>
                {pokemon.name}
              </PokemonCard>
            );
          })}
        </SimpleGrid>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
