import { LiveObjectsConfig } from "./types/endpoints/general/options";
import axios from "axios";
import Accounting from './endpoints/accounting'
import DmDataSearch from "./endpoints/dmDataSearch";
import Command from "./endpoints/command";
import DeviceConfiguration from "./endpoints/deviceConfiguration";

export default class LiveObjectsApi {

  accounting: Accounting
  dmDataSearch: DmDataSearch
  command: Command
  deviceConfiguration: DeviceConfiguration

  constructor( config: LiveObjectsConfig){
    axios.defaults.headers.common['X-API-Key'] = config.api_key;

    this.accounting = new Accounting()
    this.dmDataSearch = new DmDataSearch()
    this.command = new Command()
    this.deviceConfiguration = new DeviceConfiguration()
  }
}