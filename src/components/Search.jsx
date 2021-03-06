import React from "react";

//chakraui components
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/core";

//icons
import { FiSearch } from "react-icons/fi";

export const Search = (props) => {
  return (
    <div>
      <Flex mb="2rem" align="center" justifyContent="space-between">
        <InputGroup w={["100%", "100%", "100%", "100%"]}>
          <InputLeftElement children={<FiSearch />} color="gray.500" />
          <Input
            onChange={props.handleSearch}
            placeholder="Search"
            bg="gray.100"
            border="0"
          />
        </InputGroup>
      </Flex>
    </div>
  );
};
