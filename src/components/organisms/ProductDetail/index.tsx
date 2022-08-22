import React from 'react'

// Models
import { ProductDetail as ProductDetailModel } from '../../../models/ProductDetail'
import { formatCurrency } from '../../../utils'

// Components
import Button from '../../atoms/Button'

// Styles
import styles from './productDetail.module.scss'

type Props = {
  data: ProductDetailModel
}
const ProductDetail = ({ data }: Props) => {
  return (
    <div className={styles.productDetail}>
      <img
        className={styles.productDetail__image}
        src={data.image}
        alt={data.title}
      />
      <div className={styles.productDetail__info}>
        <p className="text-meli-gray text-14 mb-4">
          {data.condition} - {data.soldQuantity} vendidos
        </p>
        <p className="text-24 font-semibold">{data.title}</p>
        <p className="text-46 my-8">
          {formatCurrency(data.price, data.currency)}
        </p>
        <Button className="w-full">Comprar</Button>
      </div>
      <div className={styles.productDetail__description}>
        <p className="text-28 text-meli-dark-gray">Descripción del producto</p>
        <p className="text-meli-gray mt-8">{data.description}</p>
      </div>
    </div>
  )
}

export default ProductDetail
