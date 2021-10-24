export interface IResponse {
  data: IPokemonCard[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}

// Simplified version of the real response
export interface IPokemonCard {
  id: string
  name: string
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
