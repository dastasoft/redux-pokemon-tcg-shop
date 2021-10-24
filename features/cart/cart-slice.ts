import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPokemonCard } from 'types'

interface CartState {
  cards: any[]
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
    addItem(state, action: PayloadAction<IPokemonCard>) {
      const pokemonCard = action.payload
      state.cards.push(pokemonCard)
      state.totalPrice += pokemonCard.cardmarket.prices.averageSellPrice
    },
    removeItem(state, action: PayloadAction<string>) {
      const pokemonCardId = action.payload
      const index = state.cards.findIndex(({ id }) => id === pokemonCardId)

      if (index > -1) {
        state.totalPrice -=
          state.cards[index].cardmarket.prices.averageSellPrice
        state.cards = state.cards.slice(index, 1)
      }
    },
  },
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
