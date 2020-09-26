import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//material ui components
import { Container } from "@material-ui/core";

//chakra ui components
import { ThemeProvider } from "@chakra-ui/core";

//theme
import theme from "./theme";

//views
import Dashboard from "./views/Dashboard";
import PokemonDetails from "./views/PokemonDetails";

//components
import Navbar from "./components/Navbar";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Dashboard {...props} />}
            />
            <Route
              exact
              path="/:pokemonIndex"
              render={(props) => <PokemonDetails {...props} />}
            />
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
