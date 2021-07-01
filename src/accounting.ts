import { GetMonthlyAccountingMetricsOptions } from "./types/endpoints/accounting/options";
import HttpCall from './services/http-call'
import { LiveObjectsConfig } from "./types/endpoints/general/options";

export default class Accounting{

  api_key: string;

  constructor( config: LiveObjectsConfig){
    this.api_key = config.api_key;
  }

  async getMonthlyAccountingMetrics(options: GetMonthlyAccountingMetricsOptions){
    const call =  new HttpCall({
      apiKey: this.api_key
    });

    const result = await call.get({
      url: '/v1/accounting/monthly',
      params: options
    })
    return result.data
  }
}