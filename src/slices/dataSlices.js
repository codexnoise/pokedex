import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import thunk from "thunk";

const initialState = {
  pokemons: [],
};

export fethPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, {dispatch})
)

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorites: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;
        state.pokemons[currentPokemonIndex].favorite = isFavorite;
      }
    },
  },
});

export const { setFavorites, setPokemons } = dataSlice.actions;

export default dataSlice.reducer;
