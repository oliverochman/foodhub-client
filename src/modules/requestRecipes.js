import axios from 'axios';

const apiUrl = 'http://localhost:3000/v1/'

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

const fetchRecipes = async () => {
  let response = await axios.get(apiUrl + 'recipes')
  return response.data.recipes
}

const submitRecipe = async (title, ingredients, directions, image) => {
  try {
    let encodedImage, recipeParams
    recipeParams = {
      title: title,
      ingredients: ingredients,
      directions: directions
    }

    if (image) {
      // If there is an image, we add it to the params we will be sending off
      encodedImage = await toBase64(image)
      recipeParams.image = encodedImage
    }

    let response = await axios.post(apiUrl + 'recipes',
      {
        recipe: recipeParams
      }
    )
    return {
      message: response.data.message,
    }
  } catch (error) {
    return {
      error: error.response.data.error_message || error.message 
    }
  }
}

export { fetchRecipes, submitRecipe }
