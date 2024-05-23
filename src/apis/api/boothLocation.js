import { API } from '../utils';

export const boothLocation = async id => {
  try {
    const response = await API.get(`api/v1/booth/${id}/location`);
    return response.data;
  } catch (error) {
    // console.error('API error: ', error);
    return [];
  }
};
