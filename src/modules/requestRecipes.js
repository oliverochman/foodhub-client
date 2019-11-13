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
    let encodedImage = await toBase64(image)
    let response = await axios.post(apiUrl + 'recipes',
      { recipe:
        {
          title: title,
          ingredients: ingredients,
          directions: directions,
          image: encodedImage
        }
      }
    )
    return {
      message: response.data.message,
    }
  } catch(error) {
    return {
      error: error.response.data.error_message
    }
  }
}

export { fetchRecipes, submitRecipe }
