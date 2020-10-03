import React, { useState, useEffect } from "react";
import axios from "../axios/axios";

import { CircularProgress } from "@material-ui/core";
import { Text, Heading, Flex, Image, Box } from "@chakra-ui/core";

import requests from "../requests/request";
import { toFirstCharUppercase } from "../utils/functions";

//conponents
import { Chart } from "../components/chart/Chart";

const PokemonDetails = ({ match }) => {
  const { pokemonIndex } = match.params;
  const url = requests.fetchPokemon;
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  //images
  const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonIndex}.png`;

  //geting the pokemon details
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(url + `/${pokemonIndex}`);
      setPokemon(request.data);
      setLoading(false);
    };
    fetchData();
  }, [url, pokemonIndex]);

  if (loading) {
    return <CircularProgress />;
  } else {
    //Destructuring the data
    let { name, height, weight, types, stats, abilities } = pokemon;
    name = toFirstCharUppercase(name);

    return (
      <div>
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
            <Heading my="1rem" size="xl">
              Profile
            </Heading>
            <Flex borderTop="2px solid" borderColor="gray.300" py="1rem">
              <Box>
                <Heading my="0.5rem" size="md">
                  Height
                </Heading>
                <Text>{height / 10} m</Text>
              </Box>
              <Box mx="2rem">
                <Heading my="0.5rem" size="md">
                  Weight
                </Heading>
                <Text>{weight / 10} kg</Text>
              </Box>
            </Flex>
            <Box my="1rem">
              <Heading my="0.5rem" size="md">
                Ability
              </Heading>
              <Flex>
                {abilities.map((abilitiesInfo, index) => {
                  const { ability } = abilitiesInfo;
                  let abilityName = toFirstCharUppercase(ability.name);
                  return (
                    <Text key={index} mr="1rem">
                      {abilityName}
                    </Text>
                  );
                })}
              </Flex>
            </Box>
            <Box>
              <Heading size="md">Type</Heading>
              <Flex>
                {/* types */}
                {types.map((typeInfo, index) => {
                  const { type } = typeInfo;
                  let typeName = type.name;
                  typeName = toFirstCharUppercase(typeName);
                  return (
                    <Text
                      padding="0.5rem"
                      rounded="lg"
                      border="2px solid"
                      borderColor="pink.200"
                      mr="1rem"
                      my="1rem"
                      key={index}
                    >
                      {typeName}
                    </Text>
                  );
                })}
              </Flex>
            </Box>
          </Flex>
        </Flex>
        {/* Chart */}
        <Flex direction="column" my="1rem">
          <Heading my="0.5rem" size="xl">
            Stats
          </Heading>
          <Text fontSize="1rem">
            Species strengths, commonly referred to by fans as base stats
            (Japanese: 種族値 values of the species' attributes), are the
            inherent values of a species or form of a species that are used to
            the stats of a Pokémon.
          </Text>
          <Box my="1rem">
            <Chart data={stats} />
          </Box>
        </Flex>
      </div>
    );
  }
};

export default PokemonDetails;
