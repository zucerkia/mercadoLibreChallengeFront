import React from 'react'
import { useNavigate } from 'react-router-dom'

// Models
import { Product as ProductModel } from '../../../models/Product'

// Assets
import shippingIcon from '../../../assets/shipping-icon.png'

// Utils
import { formatCurrency } from '../../../utils'

// Styles
import styles from './product.module.scss'

type Props = {
  product: ProductModel
}
const Product = ({ product }: Props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`${product.id}`)
  }
  return (
    <div className={styles.product} onClick={handleClick}>
      <div className={styles.product__info}>
        <img
          className={styles.product__image}
          src={product.image}
          alt={product.title}
        />
        <div className="mt-3 col-span-6">
          <div className="mb-4 flex items-center">
            <span className="text-24 mr-2">
              {formatCurrency(product.price, product.currency)}
            </span>
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
