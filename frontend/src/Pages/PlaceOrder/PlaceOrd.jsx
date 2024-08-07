// import React from 'react'
import { useContext } from 'react'
import './PlaceOrd.css'
import { StoreContext } from '../../Context/storeContext'

const PlaceOrd = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='palce-order'> 
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
            <input type="text" placeholder='First name'/>
            <input type="text" placeholder='Last name'/>
        </div>
          <input type="email" placeholder='Email id'/>
          <input type="text" placeholder='street'/>
          <div className="multi-fields">
            <input type="text" placeholder='City'/>
            <input type="text" placeholder='state'/>
        </div>
        <div className="multi-fields">
            <input type="text" placeholder='Zip-code'/>
            <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
            <h2>Cart Total</h2>
            <div className="cart-total-details">
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
              <button >Proceed to Payment</button>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrd