// import React from 'react'
import { useState } from 'react'
import ExpMenu from '../../components/ExploreMenu/ExpMenu'
import Header from '../../components/Header/Header'
import './Home.css'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
const Home = () => {

  const [category,setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExpMenu category={category} setCategory={setCategory}/>  {/*initailizing props*/}
      <FoodDisplay category={category}/>
      <AppDownload />
    </div>
  )
}

export default Home