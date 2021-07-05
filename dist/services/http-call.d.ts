import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { CallConfig } from '../types/services/http-call';
export default class HttpCall {
    constructor(config: CallConfig);
    request(options: AxiosRequestConfig): Promise<AxiosResponse>;
    processError(error: AxiosError): string | AxiosError;
}
