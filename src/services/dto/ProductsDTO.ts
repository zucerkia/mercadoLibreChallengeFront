export interface ProductsDTO {
  author: Author
  categories: string[]
  items: Item[]
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
  free_shipping: boolean
}

interface Price {
  currency: string
  amount: number
  decimals: number
}
