export interface ProductDetailDTO {
  author: Author
  item: Item
}

interface Author {
  name: string
  lastname: string
}

interface Item {
  id: string
  title: string
  price: Price
  picture: string
  condition: string
  sold_quantity: number
  description: string
  free_shipping: boolean
}

interface Price {
  currency: string
  amount: number
  decimals: string
}
