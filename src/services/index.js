import axios from 'axios';
import config from '../constants';

export const api = {
  fetchUser() {
    return axios.get(`${config.BASE_URL}${config.PEOPLE_LABLE}`);
  },

  searchSW(planet, pageNumber) {
    return axios.get(
      `${config.BASE_URL}${config.PLANET_LABLE}?search=${planet}`,
    );
  },
};
