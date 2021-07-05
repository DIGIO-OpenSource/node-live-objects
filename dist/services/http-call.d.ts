import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { CallConfig } from '../types/services/http-call';
export default class HttpCall {
    constructor(config: CallConfig);
    get(options: AxiosRequestConfig): Promise<AxiosResponse>;
    post(options: AxiosRequestConfig): Promise<AxiosResponse>;
    put(options: AxiosRequestConfig): Promise<AxiosResponse>;
    delete(options: AxiosRequestConfig): Promise<AxiosResponse>;
    processError(error: AxiosError): string | AxiosError;
}
