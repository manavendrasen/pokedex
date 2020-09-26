import React, { useState, useEffect } from "react";
import axios from "../axios/axios";

import { CircularProgress } from "@material-ui/core";
import { Buttons, Text, Heading, Flex, Image, Box } from "@chakra-ui/core";

import requests from "../requests/request";

//capital function
import { toFirstCharUppercase } from "../utils/functions";

const PokemonDetails = ({ match }) => {
  const { pokemonIndex } = match.params;
  const url = requests.fetchPokemon;
  const [pokemon, setPokemon] = useState({});

  //images
  const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonIndex}.png`;

  //geting the pokemon details
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(url + `/${pokemonIndex}`);
      setPokemon(request.data);
    };
    fetchData();
  }, [url, pokemonIndex]);

  //Destructuring the data
  let { name, height, weight, types, stats } = pokemon;

  return (
    <Flex fontSize="1rem" direction={["column", "column", "column", "row"]}>
      <Flex w={["100%", "100%", "100%", "50%"]} direction="column">
        <Heading>{name}</Heading>
        <Text color="gray.500" fontWeight="bold">
          Pokedex Entry: #{pokemonIndex}
        </Text>
        <Image
          my="0.5rem"
          rounded="lg"
          bg="gray.100"
          p="2rem"
          width={["100%", "400px", "400px", "500px"]}
          src={imageUrl}
        ></Image>
      </Flex>
      <Flex
        mt={["2rem", "2rem", "2rem", "4rem"]}
        w={["100%", "100%", "100%", "50%"]}
        direction="column"
      >
        <Heading size="xl">Profile</Heading>

        <Flex borderTop="2px solid" borderColor="gray.300" py="1rem">
          <Box>
            <Heading size="md">Height</Heading>
            <Text>{height / 10} m</Text>
          </Box>
          <Box mx="2rem">
            <Heading size="md">Weight</Heading>
            <Text>{weight / 10} kg</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PokemonDetails;
