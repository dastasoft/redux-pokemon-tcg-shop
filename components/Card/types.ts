// Simplified version of the real response (https://docs.pokemontcg.io/api-reference/cards/card-object)
export interface IPokemonCard {
  id: string
  name: string
  rarity: string
  images: {
    small: string
    large: string
  }
  cardmarket: {
    prices: {
      averageSellPrice: number
    }
  }
}
