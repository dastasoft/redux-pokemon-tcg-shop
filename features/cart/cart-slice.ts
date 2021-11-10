import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IPokemonCard } from 'components/Card'

export interface IStoredPokemonCard extends IPokemonCard {
  uuid: string
}
interface CartState {
  cards: IStoredPokemonCard[]
  totalPrice: number
}

const initialState: CartState = {
  cards: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IStoredPokemonCard>) {
      const pokemonCard = action.payload

      state.cards.push(pokemonCard)
      state.totalPrice = Number(
        state.cards
          .reduce((acc, curr) => acc + curr.cardmarket.prices.avg30, 0)
          .toFixed(2)
      )
    },
    removeItem(state, action: PayloadAction<string>) {
      const pokemonCardUUID = action.payload
      const cards = state.cards.filter(({ uuid }) => uuid !== pokemonCardUUID)

      state.cards = cards
      state.totalPrice = Number(
        state.cards
          .reduce((acc, curr) => acc + curr.cardmarket.prices.avg30, 0)
          .toFixed(2)
      )
    },
  },
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
