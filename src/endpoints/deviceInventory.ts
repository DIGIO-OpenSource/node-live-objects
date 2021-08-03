import {URLS} from '../constants/enpoints'
import HttpCall from '../services/http-call'
import { CreateDeviceOptions, DeleteDeviceOptions, GetDeviceListOptions, GetDeviceOptions, GetDeviceStreamIdOptions, UpdateDeviceOptions } from '../types/endpoints/deviceInventory/options';
import { formatRoute } from '../utils/url';

export default class DeviceInventory{

  constructor(){}

  async getDevices(options?: GetDeviceListOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'get',
        url: URLS.DEVICE_INVENTORY.LIST,
        params: {
          activityStates: options?.activityStates,
          connectors: options?.connectors,
          fields: options?.fields,
          filterQuery: options?.filterQuery,
          groupId: options?.groupId,
          groupPath: options?.groupPath,
          id: options?.id,
          'interfaces.enabled': options ? options['interfaces.enabled'] : undefined,
          'interfaces.nodeId': options ? options['interfaces.nodeId'] : undefined,
          'interfaces.status': options ? options['interfaces.status'] : undefined,
          limit: options?.limit || 20,
          name: options?.name,
          offset: options?.offset || 0,
          sort: options?.sort,
          tags: options?.tags,
        },
        headers: {
          'X-Total-Count': options?.totalCount || true
        }
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async createDevice(options: CreateDeviceOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'post',
        url: URLS.DEVICE_INVENTORY.CREATE,
        data: options.body
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async getDevice(options?: GetDeviceOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'get',
        url: formatRoute(URLS.DEVICE_INVENTORY.GET,[
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

  async deviceExists(options?: GetDeviceOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'get',
        url: formatRoute(URLS.DEVICE_INVENTORY.GET,[
          {
            name: ':deviceId',
            value: options.deviceId
          }
        ])
      })
      if(!result.data){
        return false
      }
      return true
    }
    catch(e){
      if(JSON.parse(e.message).code === "DM_DEVICE_NOT_FOUND"){
        return false
      }
      throw new Error(e.message);
    }
  }

  async deleteDevice(options?: DeleteDeviceOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'delete',
        url: formatRoute(URLS.DEVICE_INVENTORY.DELETE,[
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

  async updateDevice(options?: UpdateDeviceOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'patch',
        url: formatRoute(URLS.DEVICE_INVENTORY.UPDATE,[
          {
            name: ':deviceId',
            value: options.deviceId
          }
        ]),
        data: options.deviceUpdate
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async getDeviceStreamId(options?: GetDeviceStreamIdOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'get',
        url: formatRoute(URLS.DEVICE_INVENTORY.GET_STREAMID,[
          {
            name: ':deviceId',
            value: options.deviceId
          }
        ]),
        params:{
          limit: options.limit || 10
        }
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }
}