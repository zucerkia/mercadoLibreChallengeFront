import React from 'react'

import shippingIcon from '../../../assets/shipping-icon.png'

import styles from './product.module.scss'

const Product = () => {
  return (
    <div className={styles.product}>
      <div className={styles.product__info}>
        <img
          className={styles.product__image}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC+CAMAAAD6ObEsAAAANlBMVEXMzMzPz8+UlJSSkpKampqWlpadnZ3Ly8uioqLGxsaZmZm/v7+goKC6urqtra2wsLC7u7uoqKjZ4D4ZAAADmElEQVR4nO3XiY7jNhBFUe4UtVr//7N5Rcpu9zIYDBLETnAPZmTTImWzVCyxnQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA/xjtXq/f2tqpRP06MD3uPT03/+Oz5Ik8fevf1Tf+W0fT+caU309aS5rTuzX7sVE595Ndyerelkha1lv7qt1JSc9ern0pSzOpaVgudmmNA+Rgg9yuoQ93XeU7Tzeva3e1lE/61FnIOMYZ4KBYpTDp6e/FHyGH3zp8hx831prr4Sc3Fb8EaW9AZ8XNYNSA/BgSbqXXNZz+v7vqOGG/qqm8L17g300LYa9v0Czdfr1DMVyhy0sxynnXK78E+dTVnm6gvOekQSr+GYrc+D7BrKWdymPJsp28h5GNpy1EtFOsi7bWz/lHr99dbcnj3HIo9THNsfolTsVCc4Zxz81uckk30FuKioctY/j0UZ5jSGJCyevgl5EW97HTO7SowI+Pes1iMUCitc2yfQqG5rzq1x6PoRdm+W0jOcFiSWPZPezivcnmFYvSIW+rRVWhcXzJLtOOolwrL2lpb6m9+1ivcQ3HoFn8KheZ+aK4ltqKZaDEcNnUFbNaA6lrUOrjSfIRiHQOUGanXjKzyc4ZiJcVqx7ZO69QzxMrG+y4Qp/XwJRQKwBJT01xK1t1XKLbQm/OVRiHv98drD0UfUFrUAEsX5cJiUWh20Ao7VC3nqlBoKWrBvHbWP7qHYvq6QJTlqpGHbm2fmTVDb865r4vNYjeMUMzWI9wH9Cpq/47rcdOWM6Tqx1e8patsqsYV5Xie9TubrfB+86cw68mpsuDrHLee3E2T+TkUNutVj9qmo2WV3fxsl1UIlQ5WiP8Doah6mKrWW8HYnTut7nvLaruzqhp51RMm3Pyec3FjvXwPhctjQLIy0weo2PZks7WUbrWOrMhTM6+c8y+0vnS1Beqbnjn0huZaLRRa76c9GpJvUenRHwX9nrvvoWjXgN1CkRQUe46OOuEm1Qn7GiXH3L8snm+YGs12gTH1jbdak35mPsbnCs6qrbTXRHoobKPdtC2PybpuMT5CMatW2gAtizEg68mT67iMBW4rtsdMu9Wh8K6h8L62+rzlac1ffzZ9HPzjcG8+vWpfaW/tf+09Hs2nXiqbzU5Wf/m35vfnvm15frcH+pt7pHfcYgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4H/oL2Dscf3xb+ecAAAAASUVORK5CYII="
          alt=""
        />
        <div className="mt-3 col-span-6">
          <div className="mb-4 flex items-center">
            <span className="text-24 mr-2">$ 1.980</span>
            <img className="w-4 h-4" src={shippingIcon} alt="" />
          </div>
          <p className="text-18">
            Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!
          </p>
        </div>
        <p className="text-12 mt-14 text-meli-gray col-start-9 col-span-2">
          capital federal
        </p>
      </div>
      <hr />
    </div>
  )
}

export default Product
