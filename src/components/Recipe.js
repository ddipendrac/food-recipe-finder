import React from 'react'

function Recipe({title, calories, ingredients, image, dishType}) {
  return (
    <div className='mb-8 rounded max-w-md flex flex-col justify-center mx-4 align-center'>
      <img className='' src={image} alt='image' />

      <div className='bg-secondary flex flex-col p-9 '>
        <div className='text-center text-white text-3xl my-2'>
          {title}
        </div>
        <div className='bg-white w-full h-1 m-auto -mt-2 mb-4'></div>

        <div className='text-white flex flex-col
        justify-evenly'>
          <div className='mb-3'>
            <div >
              Type Of Dish: {dishType}
            </div>
            <div>
              Calories: {calories}
            </div>
          </div>

          <ol>
            {ingredients.map(ingredient =>(
              <li>{ingredient.text}</li>
            ))}
          </ol>
        </div>
      </div>

    </div>
  )
}

export default Recipe