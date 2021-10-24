import { configureStore } from '@reduxjs/toolkit'
import cartReducer from 'features/cart/cart-slice'

import { apiSlice } from 'features/pokemonTCGAPI/pokemon-tcg-api-slice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
