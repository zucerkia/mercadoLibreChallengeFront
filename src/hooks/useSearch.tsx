import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

// Models
import { Product } from '../models/Product'

// Services
import { searchProducts } from '../services/product.service'

type UseSearch = {
  isLoading: boolean
  products: Product[]
}

const useSearch = (): UseSearch => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [searchParams] = useSearchParams()

  const handleSearch = async (params: string) => {
    try {
      setIsLoading(true)
      const response = await searchProducts(params)
      setProducts(response.products)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    handleSearch(searchParams.get('q') ?? '')
  }, [])

  return {
    isLoading,
    products,
  }
}

export { useSearch }
