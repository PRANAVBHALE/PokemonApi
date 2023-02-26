import { rest } from "msw";
import { PokemonDetail } from "./mocks/PokemonDetail.mock";
import { PokemonList } from "./mocks/PokemonList.mock";

export const handlers = [
  rest.get("https://pokeapi.co/api/v2/pokemon/bulbasaur", (_, res, ctx) =>
    res(ctx.status(200), ctx.json(PokemonDetail))
  ),

  rest.get(
    "https://pokeapi.co/api/v2/pokemon?offset=50&limit=50",
    (_, res, ctx) => res(ctx.status(200), ctx.json(PokemonList))
  ),
];
