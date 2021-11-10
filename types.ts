export interface IResponse {
  data: IPokemonCard[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}

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
      avg30: number
    }
  }
}
