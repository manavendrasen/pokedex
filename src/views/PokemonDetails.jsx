import React, { useState, useEffect } from "react";
import axios from "../axios/axios";

import { CircularProgress, Divider } from "@material-ui/core";
import { Text, Heading, Flex, Image, Box, Link } from "@chakra-ui/core";

import requests from "../requests/request";
import { toFirstCharUppercase } from "../utils/functions";

//conponents
import { Chart, ChartMobile } from "../components/chart/Chart";
import PopoverInfo from "../components/PopoverInfo";

const PokemonDetails = ({ match }) => {
  const { pokemonIndex } = match.params;
  const url = requests.fetchPokemon;

  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");

  //geting the pokemon details
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(url + `/${pokemonIndex}`);
      setImage(
        `https://pokeres.bastionbot.org/images/pokemon/${pokemonIndex}.png`
      );

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
          {/* image and name */}

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
              src={image}
            ></Image>
          </Flex>

          {/* info */}

          <Flex
            w={["100%", "100%", "100%", "50%"]}
            mt={["1rem", "1rem", "1rem", "0"]}
            direction="column"
          >
            <Heading my="0.5rem" size="lg">
              Details
            </Heading>

            <Divider />
            <Flex my="1rem" mb="1.5rem">
              <Flex alignItems="center" direction={["row"]}>
                <Heading my="0.5rem" size="sm">
                  Height
                </Heading>
                <Text ml="0.5rem">{height / 10} m</Text>
              </Flex>
              <Flex alignItems="center" direction={["row"]} mx="2rem">
                <Heading my="0.5rem" size="sm">
                  Weight
                </Heading>
                <Text ml="0.5rem">{weight / 10} kg</Text>
              </Flex>
            </Flex>

            {/* ability and type */}

            <Flex direction={["column", "column", "row", "row"]}>
              <Box mr="1rem">
                <Flex>
                  <Heading mr="0.5rem" size="sm">
                    Ability
                  </Heading>
                  <PopoverInfo header="Ability">
                    An Ability (Japanese: 特性 ability) is a game mechanic
                    introduced in Generation III that provides a passive effect
                    in battle or in the overworld. Individual Pokémon may have
                    only one Ability at a time.
                  </PopoverInfo>
                </Flex>

                <Flex>
                  {abilities.map((abilitiesInfo, index) => {
                    const { ability } = abilitiesInfo;
                    let abilityName = toFirstCharUppercase(ability.name);
                    return (
                      <Text
                        padding="0.5rem"
                        border="2px solid"
                        rounded="lg"
                        borderColor="gray.200"
                        key={index}
                        mr="1rem"
                        my="1rem"
                      >
                        {abilityName}
                      </Text>
                    );
                  })}
                </Flex>
              </Box>
              <Box>
                <Flex>
                  <Heading mr="0.5rem" size="sm">
                    Type
                  </Heading>
                  <PopoverInfo header="Types">
                    Types (Japanese: タイプ Type) are properties for Pokémon and
                    their moves. As of Generation VI, there are 18 types. The
                    types are based on the concept of classical elements in
                    popular culture.
                  </PopoverInfo>
                </Flex>

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
                        borderColor="gray.200"
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

            <Flex direction="column" my="0.5rem">
              <Flex>
                <Heading mb="0.5rem" mr="0.5rem" size="sm">
                  Stats
                </Heading>
                <PopoverInfo header="Base Stats">
                  Species strengths, commonly referred to by fans as base stats
                  (Japanese: 種族値 values of the species' attributes), are the
                  inherent values of a species or form of a species that are
                  used to the stats of a Pokémon.
                </PopoverInfo>
              </Flex>

              <Box display={["none", "none", "block", "block"]} my="1rem">
                <Chart data={stats} />
              </Box>
              <Box display={["block", "block", "none", "none"]} my="1rem">
                <ChartMobile data={stats} />
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          mt="1rem"
          fontWeight="bold"
          bottom="0"
          justifyContent="center"
          bg="gray.100"
          p="0.75rem"
          color="gray.500"
        >
          <Link
            fontSize="1rem"
            target="_blank"
            color="blue.500"
            href="https://pokeapi.co/"
          >
            Data from pokeapi.co
          </Link>
        </Flex>
      </div>
    );
  }
};

export default PokemonDetails;
