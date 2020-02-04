import axios from 'axios'

const doPost = (route, data, onSuccess, onError) => {

  const apiUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : ''

  axios.post(`${apiUrl}${route}`, data)
  .then(function (response) {
    
    if (!response.data.success) {
      return onError(response.data.errors);
    }
    return onSuccess();
  })
  .catch(function (error) {
    return onError(error);
  });

}

export { doPost }