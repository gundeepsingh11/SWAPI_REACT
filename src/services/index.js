import axios from 'axios';
import config from '../constants';

export const api = {
  fetchUser() {
    return axios.get(`${config.BASE_URL}${config.PEOPLE_LABLE}`);
  },
};
