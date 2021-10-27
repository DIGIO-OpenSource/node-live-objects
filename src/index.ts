import { LiveObjectsConfig } from "./types/endpoints/general/options";
import axios from "axios";
import Accounting from './endpoints/accounting'
import DmDataSearch from "./endpoints/dmDataSearch";
import DmDataStore from "./endpoints/dmDataStore";
import Command from "./endpoints/command";
import DeviceConfiguration from "./endpoints/deviceConfiguration";
import DeviceInventory from "./endpoints/deviceInventory";
import EventActivity from "./endpoints/eventActivity";
import EventProcessing from "./endpoints/eventProcessing";
import DecodersCsv from "./endpoints/decodersCsv";
import TriggersActionPolicies from "./endpoints/triggersActionPolicies";

export default class LiveObjectsApi {

  accounting: Accounting
  dmDataSearch: DmDataSearch
  dmDataStore: DmDataStore
  command: Command
  deviceConfiguration: DeviceConfiguration
  deviceInventory: DeviceInventory
  eventActivity: EventActivity
  decodersCsv: DecodersCsv
  eventProcessing: EventProcessing
  triggersActionPolicies: TriggersActionPolicies

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
    this.eventProcessing = new EventProcessing()
    this.triggersActionPolicies = new TriggersActionPolicies()
  }
}