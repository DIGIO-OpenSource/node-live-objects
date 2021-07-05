import { GetDailyAccountingMetricsOptions, GetMonthlyAccountingMetricsOptions } from "../types/endpoints/accounting/options";
import {URLS} from '../constants/enpoints'
import HttpCall from '../services/http-call'
import { LiveObjectsConfig } from "../types/endpoints/general/options";

export default class Accounting{

  api_key: string;

  constructor( config: LiveObjectsConfig){
    this.api_key = config.api_key;
  }

  async getMonthlyAccountingMetrics(options: GetMonthlyAccountingMetricsOptions): Promise<any>{
    const call =  new HttpCall({
      apiKey: this.api_key
    });

    try{
      const result = await call.request({
        method: 'get',
        url: URLS.ACCOUNTING.GET_MONTHLY_ACCOUNTING_METRICS,
        params: options
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async getDailyAccountingMetrics(options: GetDailyAccountingMetricsOptions): Promise<any>{
    const call =  new HttpCall({
      apiKey: this.api_key
    });

    try{
      const result = await call.request({
        method: 'get',
        url: URLS.ACCOUNTING.GET_DAILY_ACCOUNTING_METRICS,
        params: options
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }
}