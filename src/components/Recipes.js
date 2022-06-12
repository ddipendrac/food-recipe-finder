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
      <form className="form-container" onSubmit={onFormSubmit}>
          <input className="search-input" type="text" name="search" onChange={onInputChange} value={searchText}/>
        
          <button className="search-button" type="submit">SEARCH</button>
      </form>
      <div className='flex flex-wrap container justify-evenly align-start'>
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