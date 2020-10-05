import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Box,
} from "@chakra-ui/core";

const PopoverInfo = (props) => {
  return (
    <Box display="inline-block" {...props}>
      <Popover>
        <PopoverTrigger>
          <Button color="gray" border="none" padding="0rem" size="xs">
            ?
          </Button>
        </PopoverTrigger>
        <PopoverContent zIndex={4}>
          <PopoverArrow />
          <PopoverCloseButton border="none" />
          <PopoverHeader>{props.header}</PopoverHeader>
          <PopoverBody>{props.children}</PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default PopoverInfo;
