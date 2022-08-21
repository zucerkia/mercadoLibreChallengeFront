import React from 'react'

// Components
import Breadcrums from '../../molecules/Breadcrums'
import ProductDetail from '../../organisms/ProductDetail'

const DetailPage = () => {
  return (
    <section className="grid-layout text-meli-dark-gray">
      <Breadcrums />
      <ProductDetail />
    </section>
  )
}

export default DetailPage
