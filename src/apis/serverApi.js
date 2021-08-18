import axios from 'axios';

const serverApi = (req) => {
  return axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com/',
    headers: {
      // return empty string to makesure if cookie header not exist
      // it doest return undefined
      cookie: req.get('cookie') || '',
    },
  });
};

export default serverApi;
