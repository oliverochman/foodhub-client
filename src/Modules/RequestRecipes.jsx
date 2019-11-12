import axios from 'axios';

const apiUrl = 'http://localhost:3000/v1'
const getData = async () => {
  let headers = await sessionStorage.getItem('credentials');
  headers = JSON.parse(headers)
  headers = {
    ...headers,
    "Content-type":"application/json",
    Accept: "application/json"
  };
  const path = apiUrl = "/recipes";
  return new Promise((resolve, reject) => {
    axios.get(path, {
      headers: headers
    })
    .then(response => {
      resolve(response)
    })
  })
}

export { getData };