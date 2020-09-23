import React from "react";

//components
import { Search } from "../components/Search";
import { PokemonList } from "../components/pokemon/PokemonList";

//data
import requests from "../requests/request";
const Dashboard = () => {
  return (
    <div>
      <Search />
      <PokemonList fetchUrl={requests.fetchPokemon} />
    </div>
  );
};

export default Dashboard;
