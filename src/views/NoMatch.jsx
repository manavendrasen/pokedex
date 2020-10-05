import React from "react";
import { Flex, Heading, Text, Button } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { HOME } from "../utils/routes/routes";

const NoMatch = () => {
  return (
    <Flex
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Heading color="gray.800" fontSize={["4rem", "4rem", "5rem", "5rem"]}>
        404
      </Heading>
      <Text fontWeight="bold">Oops, Something went wrong!</Text>
      <Text color="gray.500" m="1rem" textAlign="center">
        The page you are looking for could not be found, <br /> We suggest you
        go back to home screen.
      </Text>

      <Link to={HOME}>
        <Button m="1rem" border="none" variantColor="blue" variant="ghost">
          BACK TO HOME
        </Button>
      </Link>
    </Flex>
  );
};

export default NoMatch;
