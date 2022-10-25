import React, { useState } from 'react'
import { Categories } from '../../components/Categories'
import { Items } from '../../components/Items'
import { Navbar } from '../../components/Navbar'
import { items } from '../../data/items'

function Shop() {

  const [showAll, setShowAll] = useState(true)
  const [category, setCategory] = useState("")
  
  const itemsToShow = showAll ? items : items.filter((item) => {
    if (item.category == category) {
      return true;
    }
  })

  return (
    <div>
    <Navbar />
    <Categories setCategory = {setCategory} setShowAll = {setShowAll}/>
    <Items itemsToShow = {itemsToShow}/>
    </div>
  )
}

export default Shop