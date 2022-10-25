import React, { FC } from 'react'
import uniqid from 'uniqid'

const categories = ["House", "Clothing", "Other"]

interface Props{
  showAll: boolean
  categoryState: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
  setShowAll: React.Dispatch<React.SetStateAction<boolean>>
} 

export const Categories:FC<Props> = ({setCategory, setShowAll, showAll, categoryState}) => {

  const changeToAll = () => {
    setShowAll(true)
    setCategory("")
  }

  const changeCategory = (category: string) => {
    setShowAll(false)
    setCategory(category)
  }

  if(showAll == true){
    return (
      <div className='flex justify-around items-center bg-slate-500 p-1'>
        <button onClick={() => changeToAll()} className="bg-white rounded-md p-1 px-4 shadow-md">All</button>
        {categories.map((category) => {
        return <button key={uniqid()} onClick={() => changeCategory(category)} className="bg-red-400 rounded-md p-1 px-4 shadow-md">{category}</button>
      })}</div>
    )
  } 
  return (
    <div className='flex justify-around items-center bg-slate-500 p-1'>
      <button onClick={() => changeToAll()} className="bg-red-400 rounded-md p-1 px-4 shadow-md">All</button>
      {categories.map((category) => {
        if(category == categoryState){
          return <button key={uniqid()} onClick={() => changeCategory(category)} className="bg-white rounded-md p-1 px-4 shadow-md">{category}</button>
        }
        return <button key={uniqid()} onClick={() => changeCategory(category)} className="bg-red-400 rounded-md p-1 px-4 shadow-md">{category}</button>
      
    })}</div>
  )
  
}
