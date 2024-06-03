// import React from 'react'
import './ExpMenu.css'
import { menu_list } from '../../assets/assets'

const ExpMenu = () => {
  return (
    <div className='exp-menu' id='menu'>
        <h1>Explore our Menu</h1>
        <p className='text'>our menu is a journey, with each dish as a destination</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index) => {
                return (
                    <div key={index} className="explore-menu-list-item">
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExpMenu