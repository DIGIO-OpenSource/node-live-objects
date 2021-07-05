import { GetDailyAccountingMetricsOptions, GetMonthlyAccountingMetricsOptions } from "../types/endpoints/accounting/options";
import {URLS} from '../constants/enpoints'
import HttpCall from '../services/http-call'

export default class Accounting{

  constructor(){}

  async getMonthlyAccountingMetrics(options: GetMonthlyAccountingMetricsOptions): Promise<any>{
    const call =  new HttpCall();

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
    const call =  new HttpCall();

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