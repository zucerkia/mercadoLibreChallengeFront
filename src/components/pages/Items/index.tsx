import React from 'react'

// Components
import Breadcrumbs from '../../molecules/Breadcrumbs'
import Product from '../../molecules/Product'
import ProductsList from '../../organisms/ProductsList'

// Hooks
import { useSearch } from '../../../hooks/useSearch'

const ItemsPage = () => {
  const { isLoading, products, categories } = useSearch()

  if (isLoading) {
    return <p>Loading...</p>
  }
  return (
    <section>
      <div className="grid-layout">
        <Breadcrumbs categories={categories} />
      </div>
      <ProductsList>
        {products.slice(0, 4).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsList>
    </section>
  )
}

export default ItemsPage
