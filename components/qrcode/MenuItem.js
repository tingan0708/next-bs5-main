import React, { useState } from 'react'
import 'react-photo-view/dist/react-photo-view.css'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import styles from '@/styles/qrcode.module.scss'

function MenuItem({ name, price, image, addToCart, removeFromCart, cartItem }) {
  const handleAddToCart = () => {
    addToCart(name, price)
  }

  const handleRemoveFromCart = () => {
    removeFromCart(name, price)
  }

  //點擊button時的效果
  const [pressedButton, setPressedButton] = useState(null)

  const handleMouseDown = (button) => {
    setPressedButton(button)
  }

  const handleMouseUp = () => {
    setPressedButton(null)
  }

  const handleMouseLeave = () => {
    setPressedButton(null)
  }

  return (
    <div className={`${styles.item}`} data-name={name} data-price={price}>
      <div className="col-4">
        <h5>{name}</h5>
        <h6>NT$ {price}</h6>
      </div>
      <div className="col-4">
        <button
          className={`${styles.calculator} ${
            pressedButton === 'remove' ? styles.noShadow : ''
          }`}
          onClick={handleRemoveFromCart}
          onMouseDown={() => handleMouseDown('remove')}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          -
        </button>
        <span className="">{cartItem ? cartItem.quantity : 0}</span>
        <button
          className={`${styles.calculator} ${
            pressedButton === 'add' ? styles.noShadow : ''
          }`}
          onClick={handleAddToCart}
          onMouseDown={() => handleMouseDown('add')}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          +
        </button>
      </div>
      <div className="col-4">
        <PhotoProvider>
          <PhotoView src={image}>
            <img src={image} alt={name} className={styles.image} />
          </PhotoView>
        </PhotoProvider>
      </div>
    </div>
  )
}

export default MenuItem
