import React, { useState, useEffect } from "react";
import axios from "../axios/axios";

import requests from "../requests/request";

const PokemonDetails = ({ match }) => {
  const { pokemonIndex } = match.params;
  const url = requests.fetchPokemon;
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios.get(url + `/${pokemonIndex}`);
      setPokemon(response.data);
    };
    fetchDetails();
  }, [url, pokemonIndex]);

  const getDetails = (pokemon) => {
    //Destructuring the data
    const { name, height, weight, types, stats } = pokemon;
    console.log(stats);
    return (
      <div>
        {name}
        <div>{height}</div>
        <div>{weight}</div>
        {/* {stats.map((stat, index) => {
          const typeName = stat.base_stat;
          return <div>{typeName}</div>;
        })} */}
      </div>
    );
  };

  return (
    <div>
      <h1>{getDetails(pokemon)}</h1>
    </div>
  );
};

export default PokemonDetails;
