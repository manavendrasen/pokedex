import React, { Fragment, useState, useEffect } from "react";
import { Flex, SimpleGrid } from "@chakra-ui/core";
import { Box, CircularProgress } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

//components
import { PokemonCard } from "./PokemonCard";

//capital function
import { toFirstCharUppercase } from "../../utils/functions";

//axios
import axios from "../../axios/axios";
import { LIMIT } from "../../utils/constants";
export const PokemonList = (props) => {
  const { fetchUrl } = props;
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(10);

  //get current pokemon
  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = pokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const paginate = (event, value) => {
    setCurrentPage(value);
  };

  //calculate index accourding to the pagenumber
  const indexOfPokemon = (index, currentPage) => {
    return (currentPage - 1) * pokemonPerPage + index + 1;
  };

  //geting the pokemon
  useEffect(() => {
    //if [] runs one time and doesnt run again,
    //[pokemon] means when variable changes this will run

    const fetchData = async () => {
      const request = await axios.get(fetchUrl + `?limit=${LIMIT}`);

      setPokemon(request.data.results);

      setLoading(false);
    };

    fetchData();
  }, [fetchUrl]);

  if (loading) {
    return <CircularProgress />;
  } else {
    return (
      <>
        <SimpleGrid columns={[2, 2, 3, 5]} spacing={5}>
          {currentPokemon.map((pokemon, index) => {
            let { name } = pokemon;

            //formatting the name to have first letter capital
            name = toFirstCharUppercase(name);
            return (
              <PokemonCard
                loading={loading}
                index={indexOfPokemon(index, currentPage)}
                key={index}
              >
                {name}
              </PokemonCard>
            );
          })}
        </SimpleGrid>
        <Flex alignItems="center" direction="column">
          <Box my="2rem">
            <Pagination
              count={pokemon.length / pokemonPerPage}
              onChange={paginate}
            />
          </Box>
        </Flex>
      </>
    );
  }
};
