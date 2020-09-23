import React from "react";
import { SimpleGrid } from "@chakra-ui/core";

//components
import { PokemonCard } from "./PokemonCard";
export const PokemonList = () => {
  return (
    <div>
      <SimpleGrid columns={[2, 2, 3, 4]} spacing={10}>
        {[1, 2, 3, 4, 5].map((item) => {
          return <PokemonCard>Hellp</PokemonCard>;
        })}
      </SimpleGrid>
    </div>
  );
};
