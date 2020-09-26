import React, { useState, useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/core";
import { CircularProgress } from "@material-ui/core";

//components
import { PokemonCard } from "./PokemonCard";

//axios
import axios from "../../axios/axios";
const LIMIT = 20;

export const PokemonList = (props) => {
  const { fetchUrl } = props;
  const [pokemon, setPokemon] = useState([]);

  //geting the pokemon
  useEffect(() => {
    //if [] runs one time and doesnt run again,
    //[pokemon] means when variable changes this will run
    const fetchData = async () => {
      const request = await axios.get(fetchUrl + `?limit=${LIMIT}`);
      // console.log(request.data.results);
      setPokemon(request.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      {pokemon ? (
        <SimpleGrid columns={[2, 2, 3, 5]} spacing={5}>
          {pokemon.map((pokemon, index) => {
            let { name } = pokemon;

            //formatting the name to have first letter capital
            name = name.charAt(0).toUpperCase() + name.slice(1);
            return (
              <PokemonCard index={index + 1} key={index}>
                {name}
              </PokemonCard>
            );
          })}
        </SimpleGrid>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};
