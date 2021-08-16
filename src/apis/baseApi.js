import axios from 'axios';

export default axios.create({
  baseURL: 'http://react-ssr-api.herokuapp.com/',
});
