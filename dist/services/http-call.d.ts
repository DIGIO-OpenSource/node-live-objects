import { AxiosError, AxiosResponse } from 'axios';
import { GetOptions, CallConfig } from '../types/services/http-call';
export default class HttpCall {
    constructor(config: CallConfig);
    get(options: GetOptions): Promise<AxiosResponse>;
    processError(error: AxiosError): string | AxiosError;
}
