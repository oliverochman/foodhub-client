import axios from 'axios';

const apiUrl = 'http://localhost:3000/v1/'

const getData = async () => {
  let response = await axios.get(apiUrl + 'recipes')
  return response.data.recipes
}

export { getData };