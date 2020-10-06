import React, { useState, useEffect } from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/core";
import { CircularProgress } from "@material-ui/core";
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
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(10);

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
      setLoading(true);
      let request;
      if (props.filter !== "") {
        request = await axios.get(fetchUrl + `?limit=${LIMIT}`);
      } else {
        request = await axios.get(
          fetchUrl +
            `?limit=${pokemonPerPage}&offset=${
              (currentPage - 1) * pokemonPerPage
            }`
        );
      }

      setPokemon(request.data.results);
      setLoading(false);
    };

    fetchData();
  }, [fetchUrl, currentPage, pokemonPerPage, props.filter]);

  if (loading) {
    return <CircularProgress />;
  } else {
    return (
      <>
        <SimpleGrid columns={[2, 2, 3, 5]} spacing={5}>
          {pokemon.map((pokemon, index) => {
            let { name, url } = pokemon;

            if (props.filter !== "") {
              let id = parseInt(url.slice(34, 37));
              if (name.includes(props.filter)) {
                name = toFirstCharUppercase(name);
                return (
                  <PokemonCard loading={loading} index={id} key={index}>
                    {name}
                  </PokemonCard>
                );
              }
            } else {
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
            }
          })}
        </SimpleGrid>
        {props.filter !== "" || (
          <Flex alignItems="center" direction="column">
            <Box my="2rem">
              <Pagination
                page={currentPage}
                count={LIMIT / pokemonPerPage}
                onChange={paginate}
              />
            </Box>
          </Flex>
        )}
      </>
    );
  }
};
