import React, { useState } from "react";

//components
import { Search } from "../components/Search";
import { PokemonList } from "../components/pokemon/PokemonList";
//data
import requests from "../requests/request";

//handleSearch

const Dashboard = () => {
  const [filter, setFilter] = useState("");
  const handleSearch = (e) => {
    let val = e.target.value;
    val = val.toLowerCase();
    setFilter(val);
  };

  return (
    <>
      <Search handleSearch={handleSearch} />
      <PokemonList filter={filter} fetchUrl={requests.fetchPokemon} />
    </>
  );
};

export default Dashboard;
