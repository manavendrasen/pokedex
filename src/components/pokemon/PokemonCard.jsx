import React from "react";
import { Box, Text, Heading, Image } from "@chakra-ui/core";
import { Link } from "react-router-dom";

export const PokemonCard = (props) => {
  //images
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`;

  return (
    <Link
      style={{
        textDecoration: "none",
        color: "black",
      }}
      to={`/${props.index}`}
    >
      <Box bg="gray.100" p="1rem" rounded="md">
        <Image
          m="auto"
          src={imageUrl}
          w={["100px", "100px", "100%", "100%"]}
          display="flex"
          justifyContent="center"
          alignItems="center"
        />
        <Text color="gray.600" fontWeight="bold">
          #{props.index}
        </Text>
        <Heading size="lg">{props.children}</Heading>
      </Box>
    </Link>
  );
};
