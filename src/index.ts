import { LiveObjectsConfig } from "./types/endpoints/general/options";
import axios from "axios";
import Accounting from './endpoints/accounting'
import DmDataSearch from "./endpoints/dmDataSearch";
import Command from "./endpoints/command";
import DeviceConfiguration from "./endpoints/deviceConfiguration";
import DeviceInventory from "./endpoints/deviceInventory";

export default class LiveObjectsApi {

  accounting: Accounting
  dmDataSearch: DmDataSearch
  command: Command
  deviceConfiguration: DeviceConfiguration
  deviceInventory: DeviceInventory

  constructor( config: LiveObjectsConfig){
    axios.defaults.headers.common['X-API-Key'] = config.api_key;

    this.accounting = new Accounting()
    this.dmDataSearch = new DmDataSearch()
    this.command = new Command()
    this.deviceConfiguration = new DeviceConfiguration()
    this.deviceInventory = new DeviceInventory()
  }
}