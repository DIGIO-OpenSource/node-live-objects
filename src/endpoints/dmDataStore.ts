import {URLS} from '../constants/enpoints'
import HttpCall from '../services/http-call'
import { DmDataGetStoreOptions } from '../types/endpoints/dmDataStore/options';
import { formatRoute } from '../utils/url';

export default class DmDataStore{

  constructor( ){}

  async get(options: DmDataGetStoreOptions): Promise<any>{
    const call =  new HttpCall();
    try{
      const result = await call.request({
        method: 'get',
        url: formatRoute(URLS.DM_DATA_STORE.GET,[
          {
            name: ':streamId',
            value: options.streamId
          }
        ]),
        params: {
          bookmarkId : options.bookmarkId,
          limit: options.limit,
          timeRange:  options.timeRange
        },
        
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }
}