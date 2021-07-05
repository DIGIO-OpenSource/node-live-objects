import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
export default class HttpCall {
    constructor();
    request(options: AxiosRequestConfig): Promise<AxiosResponse>;
    processError(error: AxiosError): string | AxiosError;
}
