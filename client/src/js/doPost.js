import axios from 'axios'
import { apiUrl } from '../components/Main'; 


const doPost = (route, data, onSuccess, onError) => {

  console.log('::: POST')

  axios.post(`${apiUrl}${route}`, data)
  .then(function (response) {
    
    if (!response.data.success) {
      console.log('onError')
      return onError(response.data.errors);
    }
    console.log('onSuccess')
    return onSuccess();
  })
  .catch(function (error) {
    return onError(error);
  });

}

export { doPost }