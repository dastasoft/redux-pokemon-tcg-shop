import { IPokemonCard } from 'components/Card'

export interface IResponse {
  data: IPokemonCard[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}
