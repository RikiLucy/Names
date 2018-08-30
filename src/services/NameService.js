import config from '../config/config.json';

class NameService {
  static async getNames() {
    try {
      const url = config.API_URL;
      let response = await fetch(url, {
        method: 'GET',
      });

      response = await response;
      response = await response.json();

      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default NameService;
