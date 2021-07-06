import {URLS} from '../constants/enpoints'
import HttpCall from '../services/http-call'
import { GetConfigurationOptions, GetParametersOptions, GetParameterStateOptions, SetConfigurationOptions, UpdateParameterStateOptions } from '../types/endpoints/deviceConfiguration/options';
import { formatRoute } from '../utils/url';

export default class DeviceConfiguration{

  constructor(){}

  async getConfiguration(options: GetConfigurationOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'get',
        url: formatRoute(URLS.DEVICE_CONFIGURATION.GET,[
          {
            name: ':deviceId',
            value: options.deviceId
          }
        ])
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async setConfiguration(options: SetConfigurationOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'post',
        url: formatRoute(URLS.DEVICE_CONFIGURATION.SET,[
          {
            name: ':deviceId',
            value: options.deviceId
          }
        ]),
        data: options.req
        
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async getParameters(options: GetParametersOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'get',
        url: formatRoute(URLS.DEVICE_CONFIGURATION.GET_PARAMETERS,[
          {
            name: ':deviceId',
            value: options.deviceId
          }
        ])
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async getParameterState(options: GetParameterStateOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'get',
        url: formatRoute(URLS.DEVICE_CONFIGURATION.GET_PARAMETER_STATE,[
          {
            name: ':deviceId',
            value: options.deviceId
          },
          {
            name: ':paramKey',
            value: options.paramKey
          }
        ])
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async updateParameterState(options: UpdateParameterStateOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'put',
        url: formatRoute(URLS.DEVICE_CONFIGURATION.UPDATE_PARAMETER_STATE,[
          {
            name: ':deviceId',
            value: options.deviceId
          },
          {
            name: ':paramKey',
            value: options.paramKey
          }
        ]),
        params: {
          force: options.force || false
        },
        data: {
          newStatus: options.newStatus
        }
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }
}