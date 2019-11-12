import axios from 'axios';

const apiUrl = 'http://localhost:3000/v1/'

const fetchRecipes = async () => {
  let response = await axios.get(apiUrl + 'recipes')
  return response.data.recipes
}

export { fetchRecipes };