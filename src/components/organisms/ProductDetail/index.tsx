import React from 'react'
import Button from '../../atoms/Button'

import styles from './productDetail.module.scss'

const ProductDetail = () => {
  return (
    <div className={styles.productDetail}>
      <img
        className={styles.productDetail__image}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC+CAMAAAD6ObEsAAAANlBMVEXMzMzPz8+UlJSSkpKampqWlpadnZ3Ly8uioqLGxsaZmZm/v7+goKC6urqtra2wsLC7u7uoqKjZ4D4ZAAADmElEQVR4nO3XiY7jNhBFUe4UtVr//7N5Rcpu9zIYDBLETnAPZmTTImWzVCyxnQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA/xjtXq/f2tqpRP06MD3uPT03/+Oz5Ik8fevf1Tf+W0fT+caU309aS5rTuzX7sVE595Ndyerelkha1lv7qt1JSc9ern0pSzOpaVgudmmNA+Rgg9yuoQ93XeU7Tzeva3e1lE/61FnIOMYZ4KBYpTDp6e/FHyGH3zp8hx831prr4Sc3Fb8EaW9AZ8XNYNSA/BgSbqXXNZz+v7vqOGG/qqm8L17g300LYa9v0Czdfr1DMVyhy0sxynnXK78E+dTVnm6gvOekQSr+GYrc+D7BrKWdymPJsp28h5GNpy1EtFOsi7bWz/lHr99dbcnj3HIo9THNsfolTsVCc4Zxz81uckk30FuKioctY/j0UZ5jSGJCyevgl5EW97HTO7SowI+Pes1iMUCitc2yfQqG5rzq1x6PoRdm+W0jOcFiSWPZPezivcnmFYvSIW+rRVWhcXzJLtOOolwrL2lpb6m9+1ivcQ3HoFn8KheZ+aK4ltqKZaDEcNnUFbNaA6lrUOrjSfIRiHQOUGanXjKzyc4ZiJcVqx7ZO69QzxMrG+y4Qp/XwJRQKwBJT01xK1t1XKLbQm/OVRiHv98drD0UfUFrUAEsX5cJiUWh20Ao7VC3nqlBoKWrBvHbWP7qHYvq6QJTlqpGHbm2fmTVDb865r4vNYjeMUMzWI9wH9Cpq/47rcdOWM6Tqx1e8patsqsYV5Xie9TubrfB+86cw68mpsuDrHLee3E2T+TkUNutVj9qmo2WV3fxsl1UIlQ5WiP8Doah6mKrWW8HYnTut7nvLaruzqhp51RMm3Pyec3FjvXwPhctjQLIy0weo2PZks7WUbrWOrMhTM6+c8y+0vnS1Beqbnjn0huZaLRRa76c9GpJvUenRHwX9nrvvoWjXgN1CkRQUe46OOuEm1Qn7GiXH3L8snm+YGs12gTH1jbdak35mPsbnCs6qrbTXRHoobKPdtC2PybpuMT5CMatW2gAtizEg68mT67iMBW4rtsdMu9Wh8K6h8L62+rzlac1ffzZ9HPzjcG8+vWpfaW/tf+09Hs2nXiqbzU5Wf/m35vfnvm15frcH+pt7pHfcYgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4H/oL2Dscf3xb+ecAAAAASUVORK5CYII="
        alt=""
      />
      <div className={styles.productDetail__info}>
        <p className="text-meli-gray text-14 mb-4">nuevo - 234 vendidos</p>
        <p className="text-24 font-semibold">Deco Reverse Sombrero Oxford</p>
        <p className="text-46 my-8">$ 1.980</p>
        <Button className="w-full">Comprar</Button>
      </div>
      <div className={styles.productDetail__description}>
        <p className="text-28 text-meli-dark-gray">Descripción del producto</p>
        <p className="text-meli-gray mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          vel eligendi sunt soluta fuga nobis nam a magni, earum ab maxime
          aperiam labore provident harum id? Natus architecto error similique.
        </p>
      </div>
    </div>
  )
}

export default ProductDetail
