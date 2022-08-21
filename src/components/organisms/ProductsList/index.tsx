import React from 'react'

type Props = {
  children?: React.ReactNode
}
const ProductsList = ({ children }: Props) => {
  return <ul className="grid-layout">{children}</ul>
}

export default ProductsList
