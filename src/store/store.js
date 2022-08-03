import { configureStore } from '@reduxjs/toolkit'

import { authSlice } from './slices/auth'
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/pokemon'
import { uiSlice } from './slices/ui'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    ui: uiSlice.reducer,
    auth: authSlice.reducer
  }
})