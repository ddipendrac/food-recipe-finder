import React from 'react'

function Recipe({title, calories, ingredients, image, dishType}) {
  return (
    <div className='my-card'>
      <div className='image'>
        <img  src={image} alt='image' />
      </div>
      

      <div className='description'>
        <div className='title'>
          {title}
        </div>
        <ol className='ingredients'>
          {ingredients.map(ingredient =>(
            <li>{ingredient.text}</li>
          ))}
        </ol>
      </div>

    </div>
  )
}

export default Recipe