import React from 'react'

type Props = {
  categories: string[]
}
const Breadcrumbs = ({ categories }: Props) => {
  return (
    <div className="col-start-2 col-end-12 py-4 text-14 text-meli-gray">
      {categories.concat('>')}
    </div>
  )
}

export default Breadcrumbs
