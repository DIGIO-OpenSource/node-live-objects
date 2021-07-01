import axios from 'axios';
import { GetOptions, CallConfig } from '../types/services/http-call';

axios.defaults.baseURL = 'https://liveobjects.orange-business.com/api'

export default class HttpCall {


  constructor(config: CallConfig){
    axios.defaults.headers.common['X-API-Key'] = config.apiKey;
  }

  async get(options: GetOptions){
    try {
      const response = await axios({
        method: 'get',
        url: options.url,
        params: options.params
      })
      return response
    } catch (error) {
      return error
    }
  }

}