import config from '../config/config.json';

class SumService {
  static async getSum(data) {
    try {
      const { first, second } = data;
      const url = `${config.BACKEND_URL}?first=${first || 0}&second=${second || 0}`;
      let response = await fetch(url);

      response = await response;
      response = await response.json();

      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default SumService;
