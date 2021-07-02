import axios, { AxiosError, AxiosPromise, AxiosResponse } from 'axios';
import { GetOptions, CallConfig, ResponseError } from '../types/services/http-call';

axios.defaults.baseURL = 'https://liveobjects.orange-business.com/api'

export default class HttpCall {


  constructor(config: CallConfig){
    axios.defaults.headers.common['X-API-Key'] = config.apiKey;
  }

   async get(options: GetOptions): Promise<AxiosResponse> {
     console.log(options)
    try {
      return await axios({
        method: 'get',
        url: options.url,
        params: options.params
      })
    } catch (error) {
      this.processError(error)
    }
  }

  processError (error: AxiosError): string | AxiosError {
    if (axios.isAxiosError(error)) {
      throw new Error(JSON.stringify(error.response.data));
    } else {
      throw new Error('General Error');
    }
  }

}