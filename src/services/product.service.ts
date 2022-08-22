import axios from 'axios'

import { ProductDetail } from '../models/ProductDetail'
import { Product } from '../models/Product'

import { ProductDetailDTO } from './dto/ProductDetailDTO'
import { ProductsDTO } from './dto/ProductsDTO'

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/items',
  headers: {
    name: 'julian Andres',
    lastname: 'Sucerquia Uribe',
  },
})

type SearchProducts = {
  categories: string[]
  products: Product[]
}

const searchProducts = async (query: string): Promise<SearchProducts> => {
  const { items, categories } = (await instance.get<ProductsDTO>(`?q=${query}`))
    .data
  return {
    categories,
    products: items.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price.amount,
      image: item.picture,
      freeShipping: item.free_shipping,
      currency: item.price.currency,
      soldQuantity: item.sold_quantity,
    })),
  }
}

const getProductById = async (id: string): Promise<ProductDetail> => {
  const { item } = (await instance.get<ProductDetailDTO>(`/${id}`)).data

  const productDetail: ProductDetail = {
    title: item.title,
    price: item.price.amount,
    image: item.picture,
    id: item.id,
    freeShipping: item.free_shipping,
    description: item.description,
    condition: item.condition,
    currency: item.price.currency,
    soldQuantity: item.sold_quantity,
  }
  return productDetail
}

export { searchProducts, getProductById }
