import React from "react";

//material ui components
import { Container } from "@material-ui/core";

//chakra ui components
import { ThemeProvider } from "@chakra-ui/core";

//theme
import theme from "./theme";

//components
import { Search } from "./components/Search";
import { PokemonList } from "./components/pokemon/PokemonList";

//data
import requests from "./requests/request";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <h1>Pokedex</h1>
        <Search />
        <PokemonList fetchUrl={requests.fetchPokemon} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
