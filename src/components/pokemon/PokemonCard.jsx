import React from "react";
import { Box, Text, Heading, Image } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
export const PokemonCard = (props) => {
  if (props.loading) {
    return <CircularProgress />;
  }

  //images
  const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${props.index}.png`;

  return (
    <Link
      style={{
        textDecoration: "none",
        color: "black",
      }}
      to={`/${props.index}`}
    >
      <Box fontSize="1rem" bg="gray.100" p="1rem" rounded="md">
        <Image
          p="0.5rem"
          mb="1.5rem"
          m="auto"
          src={imageUrl}
          w={["100px", "100px", "100%", "100%"]}
          display="flex"
          justifyContent="center"
          alignItems="center"
        />
        <Text my="0.5rem" color="gray.500" fontWeight="bold">
          #{props.index}
        </Text>
        <Heading mb="0.5rem" size="lg">
          {props.children}
        </Heading>
      </Box>
    </Link>
  );
};
