import axios, { AxiosError, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import { CallConfig } from '../types/services/http-call';

axios.defaults.baseURL = 'https://liveobjects.orange-business.com/api'

export default class HttpCall {


  constructor(config: CallConfig){
    axios.defaults.headers.common['X-API-Key'] = config.apiKey;
  }

  async request(options: AxiosRequestConfig): Promise<AxiosResponse> {
    try {
      return await axios(options)
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