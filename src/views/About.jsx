import React from "react";
import { Heading, Text, Link, Flex } from "@chakra-ui/core";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillBehanceCircle,
} from "react-icons/ai";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "1rem",
  },
  link: {
    "&:hover": {
      color: "#63B3ED",
    },
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Flex
        className={classes.root}
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Heading color="gray.800" fontSize={["4rem", "4rem", "4rem", "4rem"]}>
          About
        </Heading>
        <Text fontWeight="bold" m="1rem">
          Designed and Developed by <br />
          Manavendra Sen
        </Text>
        <Text color="gray.500" m="1rem" textAlign="center">
          This is a simple react app, <br /> which uses pokeapi to fetch
          information about Pokemon and display it. <br /> Other tools used
          include, Material UI, Chakra UI and React ChartJS v2.
        </Text>

        {/* END */}
        <Flex p="1rem" direction="column" my="1rem">
          <Text
            color="blue.500"
            fontFamily="Poppins"
            fontWeight="700"
            fontSize="1rem"
            mb="0.5rem"
          >
            CONNECT TO ME
          </Text>
          <Flex justifyContent="center">
            <Link
              className={classes.link}
              color="black"
              mr="1rem"
              target="_black"
              href="https://github.com/manavendrasen"
            >
              <AiFillGithub size="25px" />
            </Link>
            <Link
              className={classes.link}
              color="black"
              mr="1rem"
              target="_black"
              href="https://behence.net/manavendrasen"
            >
              <AiFillBehanceCircle size="25px" />
            </Link>
            <Link
              className={classes.link}
              color="black"
              target="_black"
              href="https://www.linkedin.com/in/manavendrasen/"
            >
              <AiFillLinkedin size="25px" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
