import { Product } from './Product'

export interface ProductDetail extends Product {
  description: string
  condition: string
}
