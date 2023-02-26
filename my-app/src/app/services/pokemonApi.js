import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//https://jsonplaceholder.typicode.com/posts
//https://pokeapi.co/api/v2/pokemon?limit=151

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonsList: builder.query({
      query: (offset = 0) => `pokemon?offset=${offset}&limit=50"`,
    }),

    getPokemonDetail: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonsListQuery, useGetPokemonDetailQuery } = pokemonApi;
