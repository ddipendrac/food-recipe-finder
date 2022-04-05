import React, { useState, useEffect } from 'react'
import Recipe from './Recipe'

function Recipes() {
  const APP_ID = 'd8d454af'
  const APP_KEY = 'e5b0bc7e96e182662f44f0d0538c12d0'

  const [recipes, setRecipes] = useState([])
  const [searchText, setSearchText] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)

    const data = await response.json()

    setRecipes(data.hits)
  }
  
  const onInputChange  = (e) => {
    setSearchText(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    setQuery(searchText)
    setSearchText('')
  }

  return (
    <div className="container mx-auto px-4 py-4" >
      <form onSubmit={onFormSubmit}>
        <div className="flex flex-col">
          <label className='text-4xl font-bold text-primary '>Find Recipe</label>
          <input className="shadow appearance-none border rounded w-full py-3 px-3 block w-full text-base text-slate-500 my-3" type="text" name="search" onChange={onInputChange} value={searchText}/>
        </div>
        <button className="bg-primary text-white px-5 py-2 rounded text-xl font-semibold" type="submit">Search</button>
      </form>
      <div className='mt-8 flex flex-wrap container justify-evenly align-start'>
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label}  calories={recipe.recipe.calories} 
            dishType={recipe.recipe.dishType} 
            ingredients={recipe.recipe.ingredients} 
            image={recipe.recipe.image} 
          />
        ))}
      </div>
    </div>
  )
}

export default Recipes