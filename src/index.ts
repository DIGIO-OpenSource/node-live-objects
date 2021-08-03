import { LiveObjectsConfig } from "./types/endpoints/general/options";
import axios from "axios";
import Accounting from './endpoints/accounting'
import DmDataSearch from "./endpoints/dmDataSearch";
import DmDataStore from "./endpoints/dmDataStore";
import Command from "./endpoints/command";
import DeviceConfiguration from "./endpoints/deviceConfiguration";
import DeviceInventory from "./endpoints/deviceInventory";
import EventActivity from "./endpoints/eventActivity";
import DecodersCsv from "./endpoints/decodersCsv";

export default class LiveObjectsApi {

  accounting: Accounting
  dmDataSearch: DmDataSearch
  dmDataStore: DmDataStore
  command: Command
  deviceConfiguration: DeviceConfiguration
  deviceInventory: DeviceInventory
  eventActivity: EventActivity
  decodersCsv: DecodersCsv

  constructor( config: LiveObjectsConfig){
    axios.defaults.headers.common['X-API-Key'] = config.api_key;

    this.accounting = new Accounting()
    this.dmDataSearch = new DmDataSearch()
    this.dmDataStore = new DmDataStore()
    this.command = new Command()
    this.deviceConfiguration = new DeviceConfiguration()
    this.deviceInventory = new DeviceInventory()
    this.eventActivity = new EventActivity()
    this.decodersCsv = new DecodersCsv()
  }
}