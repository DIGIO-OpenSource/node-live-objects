import {URLS} from '../constants/enpoints'
import HttpCall from '../services/http-call'
import { DmDataSearchOptions, DmDataSearchHitsOptions } from '../types/endpoints/dmDataSearch/options';

export default class DmDataSearch{

  constructor( ){}

  async search(options: DmDataSearchOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'post',
        url: URLS.DM_DATA_SEARCH.SEARCH,
        params: {
          trackTotalHits: options.trackTotalHits
        },
        data: options.dslRequest || {}
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async searchHits(options: DmDataSearchHitsOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'post',
        url: URLS.DM_DATA_SEARCH.SEARCH_HITS,
        params: {
          trackTotalHits: options.trackTotalHits
        },
        data: options.dslRequest || {}
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }
}