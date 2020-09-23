import React from "react";
import { Box, Text, Heading, Image } from "@chakra-ui/core";

export const PokemonCard = () => {
  return (
    <div>
      <Box bg="gray.100" p="1rem" rounded="md">
        <Image src="https://bit.ly/sage-adebayo" w="100%" />
        <Text color="gray.600" fontWeight="bold">
          #123
        </Text>
        <Heading size="lg">Pikachu</Heading>
      </Box>
    </div>
  );
};
