import React from 'react'
import { Outlet } from 'react-router-dom'
import Breadcrums from '../../molecules/Breadcrums'

// Components
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
