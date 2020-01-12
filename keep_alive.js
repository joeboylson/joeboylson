const axios = require('axios');
const URL = 'http://joeboylson.herokuapp.com/'

axios.get('URL')
.then(response => console.log(response))
.catch(error => console.log(error))
