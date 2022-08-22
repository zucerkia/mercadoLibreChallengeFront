import React from 'react'

// Components
import Breadcrums from '../../molecules/Breadcrums'
import Product from '../../molecules/Product'
import ProductsList from '../../organisms/ProductsList'

// Hooks
import { useSearch } from '../../../hooks/useSearch'

const ItemsPage = () => {
  const { isLoading, products } = useSearch()

  if (isLoading) {
    return <p>Loading...</p>
  }
  return (
    <section>
      <Breadcrums />
      <ProductsList>
        {products.slice(0, 4).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsList>
    </section>
  )
}

export default ItemsPage
