import { LiveObjectsConfig } from "./types/endpoints/general/options";
/*import { GetMonthlyAccountingMetricsOptions } from "./types/endpoints/accounting/options";
import HttpCall from './services/http-call'*/
import Accounting from './accounting'

export default class LiveObjectsApi {

  accounting: Accounting;
  

  constructor( config: LiveObjectsConfig){
    this.accounting = new Accounting({api_key: config.api_key})
    
  }
}