import React, { useState } from 'react'
import "./home.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownloud from '../../components/AppDownloud/AppDownloud'

function Home() {

  const [category,setCategory] = useState("All")
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownloud />
    </div>
  )
}

export default Home
