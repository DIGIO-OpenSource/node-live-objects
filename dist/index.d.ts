import { LiveObjectsConfig } from "./types/endpoints/general/options";
import Accounting from './endpoints/accounting';
import DmDataSearch from "./endpoints/dmDataSearch";
import Command from "./endpoints/command";
export default class LiveObjectsApi {
    accounting: Accounting;
    dmDataSearch: DmDataSearch;
    command: Command;
    constructor(config: LiveObjectsConfig);
}
