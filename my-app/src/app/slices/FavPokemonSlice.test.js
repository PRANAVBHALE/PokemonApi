import { store } from "../../app/store";
import { addPokemon, removePokemon } from "./FavPokemonSlice";

describe("Fav Pokemon Slice tests", () => {
  it("Should initially set favPokemonList to an empty array", () => {
    const state = store.getState().favPokemon;
    expect(state.favPokemonList).toEqual([]);
  });

  it("Should set favPokemon in the list after dispatch addPokemon", async () => {
    await store.dispatch(addPokemon("Pikachu"));

    const state = store.getState();
    expect(state.favPokemon.favPokemonList).toEqual(["Pikachu"]);
  });

  it("Should remove favPokemon in the list after dispatch removePokemon", async () => {
    //filling up the list (check)
    await store.dispatch(addPokemon("Pikachu"));

    await store.dispatch(removePokemon("Pikachu"));
    let state = store.getState();
    expect(state.favPokemon.favPokemonList).toEqual([]);
  });
});
