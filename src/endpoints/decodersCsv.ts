import {URLS} from '../constants/enpoints'
import HttpCall from '../services/http-call'
import { ActivateCsvOptions, CreateCsvOptions, DeleteCsvOptions, GetCsvOptions, ListCsvOptions, TestCsvOptions, UpdateCsvOptions } from '../types/endpoints/decodersCsv/options';
import { formatRoute } from '../utils/url';

export default class DecodersCsv{

  constructor(){}

  async list(options?: ListCsvOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'get',
        url: URLS.DECODERS_CSV.LIST,
        params: options
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async create(options: CreateCsvOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'post',
        url: URLS.DECODERS_CSV.CREATE,
        data: options.csvPayloadDescription
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async test(options: TestCsvOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'post',
        url: URLS.DECODERS_CSV.TEST,
        data: options.dataDecodingTestRequest
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async get(options: GetCsvOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'get',
        url: formatRoute(URLS.DECODERS_CSV.GET,[
          {
            name: ':decoderId',
            value: options?.decoderId
          }
        ])
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async update(options: UpdateCsvOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'put',
        url: formatRoute(URLS.DECODERS_CSV.UPDATE,[
          {
            name: ':decoderId',
            value: options?.decoderId
          }
        ]),
        data: options.csvPayloadDescription
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
    
  }

  async delete(options: DeleteCsvOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'delete',
        url: formatRoute(URLS.DECODERS_CSV.DELETE,[
          {
            name: ':decoderId',
            value: options?.decoderId
          }
        ])
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
    
  }

  async activate(options: ActivateCsvOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'put',
        url: formatRoute(URLS.DECODERS_CSV.ACTIVATE,[
          {
            name: ':decoderId',
            value: options?.decoderId
          }
        ]),
        data: options.enabled
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
    
  }
}