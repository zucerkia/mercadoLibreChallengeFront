import React from 'react'

// Models
import { Product as ProductModel } from '../../../models/Product'

// Assets
import shippingIcon from '../../../assets/shipping-icon.png'

// Styles
import styles from './product.module.scss'

type Props = {
  product: ProductModel
}
const Product = ({ product }: Props) => {
  return (
    <div className={styles.product}>
      <div className={styles.product__info}>
        <img
          className={styles.product__image}
          src={product.image}
          alt={product.title}
        />
        <div className="mt-3 col-span-6">
          <div className="mb-4 flex items-center">
            <span className="text-24 mr-2">$ {product.price}</span>
            {product.freeShipping && (
              <img
                className="w-4 h-4"
                src={shippingIcon}
                alt="free shipping icon"
              />
            )}
          </div>
          <p className="text-18">{product.title}</p>
        </div>
        <p className="text-12 mt-4 text-meli-gray col-start-9 col-span-2">
          capital federal
        </p>
      </div>
      <hr />
    </div>
  )
}

export default Product
