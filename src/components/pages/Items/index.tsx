import React from 'react'

// Components
import Breadcrums from '../../molecules/Breadcrums'
import Product from '../../molecules/Product'
import ProductsList from '../../organisms/ProductsList'

const ItemsPage = () => {
  return (
    <section>
      <Breadcrums />
      <ProductsList>
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductsList>
    </section>
  )
}

export default ItemsPage
