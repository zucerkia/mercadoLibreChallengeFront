import React from 'react'
import { useProduct } from '../../../hooks/useProduct'

// Components
import ProductDetail from '../../organisms/ProductDetail'

const DetailPage = () => {
  const { isLoading, product } = useProduct()

  if (isLoading) {
    return <p>Loading ...</p>
  }
  return (
    <section className="grid-layout text-meli-dark-gray">
      <ProductDetail data={product} />
    </section>
  )
}

export default DetailPage
