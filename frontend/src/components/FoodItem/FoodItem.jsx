// import React from 'react'
import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Fooditem.css'
import { StoreContext } from '../../Context/storeContext'
const FoodItem = ({id,name,price,description,image}) => {

    // const [itemCount,setItemCount] = useState(0)
    const {cartItems,addToCart,removeCartItems} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-image-comtainer">
            <img className='food-item-image' src={image} alt="" />
            {!cartItems[id]
              ?<img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
              :<div className="food-item-counter">
                <img onClick={() => removeCartItems(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
              </div>
            }
        </div>
        <div className="foo-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem