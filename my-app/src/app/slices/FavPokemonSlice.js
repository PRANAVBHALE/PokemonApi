import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  favPokemonList: [],
};

export const favPokemonSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      state.favPokemonList.push(action.payload);
    },
    removePokemon: (state, action) => {
      const { favPokemonList } = current(state);
      state.favPokemonList = favPokemonList.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const { addPokemon, removePokemon } = favPokemonSlice.actions;

export default favPokemonSlice.reducer;
