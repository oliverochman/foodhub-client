import axios from 'axios';

const apiUrl = 'http://localhost:3000/v1'

const getData = async () => {
  try {
    let response = await axios.get(apiUrl + '/recipes')
    return response.data.message
  } catch (error) {
    return {
      message: error.data.message
    }
  }
}

export { getData };