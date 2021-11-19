import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IPokemonCard } from 'components/Card'

export interface IStoredPokemonCard extends IPokemonCard {
  uuid: string
}
interface CartState {
  cards: IStoredPokemonCard[]
}

const initialState: CartState = {
  cards: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IStoredPokemonCard>) {
      const pokemonCard = action.payload

      state.cards.push(pokemonCard)
    },
    removeItem(state, action: PayloadAction<string>) {
      const pokemonCardUUID = action.payload
      const cards = state.cards.filter(({ uuid }) => uuid !== pokemonCardUUID)

      state.cards = cards
    },
  },
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
