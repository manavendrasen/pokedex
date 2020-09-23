import React from "react";

const PokemonDetails = (props) => {
  const { match } = props;
  const { params } = match;
  const { pokemonIndex } = params;
  return (
    <div>
      <h1>Details for {pokemonIndex}</h1>
    </div>
  );
};

export default PokemonDetails;
