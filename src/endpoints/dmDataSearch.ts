import {URLS} from '../constants/enpoints'
import HttpCall from '../services/http-call'
import { AxiosResponse } from "axios";
import { DmDataSearchOptions, DmDataSearchHitsOptions } from '../types/endpoints/dmDataSearch/options';
import { LiveObjectsConfig } from "../types/endpoints/general/options";

export default class DmDataSearch{

  private api_key: string;

  constructor( config: LiveObjectsConfig){
    this.api_key = config.api_key;
  }

  async search(options: DmDataSearchOptions): Promise<String | AxiosResponse>{
    const call =  new HttpCall({
      apiKey: this.api_key
    });

    try{
      const result = await call.post({
        url: URLS.DM_DATA_SEARCH.SEARCH,
        params: {
          trackTotalHits: options.trackTotalHits
        },
        data: {
          dslRequest: options.dslRequest
        }
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async searchHits(options: DmDataSearchHitsOptions): Promise<String | AxiosResponse>{
    const call =  new HttpCall({
      apiKey: this.api_key
    });

    try{
      const result = await call.post({
        url: URLS.DM_DATA_SEARCH.SEARCH_HITS,
        params: {
          trackTotalHits: options.trackTotalHits
        },
        data: {
          dslRequest: options.dslRequest
        }
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }
}