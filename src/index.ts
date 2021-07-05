import { LiveObjectsConfig } from "./types/endpoints/general/options";
/*import { GetMonthlyAccountingMetricsOptions } from "./types/endpoints/accounting/options";
import HttpCall from './services/http-call'*/
import Accounting from './endpoints/accounting'
import DmDataSearch from "./endpoints/dmDataSearch";

export default class LiveObjectsApi {

  accounting: Accounting
  dmDataSearch: DmDataSearch

  constructor( config: LiveObjectsConfig){
    this.accounting = new Accounting({api_key: config.api_key})
    this.dmDataSearch = new DmDataSearch({api_key: config.api_key})
  }
}