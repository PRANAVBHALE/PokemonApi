import { useState } from "react";
import { useGetPokemonsListQuery } from "../../services/pokemonApi";

//app components
import Loader from "../Loader/Loader";
import PokemonCard from "../PokemonCard/PokemonCard";
import PageButton from "../PageButton/PageButton";
import ErrorMsg from "../ErrorMsg/ErrorMsg";

export default function PokemonList() {
  const pokemonsPerPage = 50;
  const [offset, setOffset] = useState(0);

  const {
    data: pokemons = [],
    isLoading,
    isFetching,
    isError,
  } = useGetPokemonsListQuery(offset);

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMsg />;
  }

  return (
    <div>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {pokemons.results.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <PageButton
          isDisabled={pokemons.previous === null}
          handlePageClick={() => setOffset(offset - pokemonsPerPage)}
          name={"Prev Page"}
        />
        <PageButton
          isDisabled={pokemons.results.length === pokemons.count}
          handlePageClick={() => setOffset(offset + pokemonsPerPage)}
          name={"Next Page"}
        />
      </div>
    </div>
  );
}
