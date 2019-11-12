import axios from 'axios'
const apiUrl = 'http://localhost:3000/v1/'

const submitRecipe = async (title, ingredients, directions) => {
  try {
    let response = await axios.post(apiUrl + 'recipes',
      { recipe:
        {
          title: title,
          ingredients: ingredients,
          directions: directions
        }
      }
    )
    return {
      message: response.data.message,
      status: response.status
    }
  } catch(error) {
    return {
      message: error.response.data.error_message,
      status: error.response.status
    }
  }
}

export { submitRecipe }