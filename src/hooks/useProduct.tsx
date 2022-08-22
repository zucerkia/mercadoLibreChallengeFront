import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// Models
import { ProductDetail as ProductDetailModel } from '../models/ProductDetail'

// Service
import { getProductById } from '../services/product.service'

type UseProduct = {
  getProductDetail: (id: string) => Promise<void>
  isLoading: boolean
  product: ProductDetailModel
}
const useProduct = (): UseProduct => {
  const [product, setProduct] = useState<ProductDetailModel>({
    id: '',
    title: '',
    soldQuantity: 0,
    price: 0,
    image: '',
    freeShipping: false,
    description: '',
    currency: 'COP',
    condition: '',
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const params = useParams()

  const getProductDetail = async (id: string) => {
    try {
      setIsLoading(true)
      const response = await getProductById(id)
      setProduct(response)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getProductDetail(params.id ?? '')
  }, [])

  return {
    getProductDetail,
    isLoading,
    product: product,
  }
}

export { useProduct }
