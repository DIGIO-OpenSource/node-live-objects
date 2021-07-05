import { LiveObjectsConfig } from "./types/endpoints/general/options";
import Accounting from './endpoints/accounting';
import DmDataSearch from "./endpoints/dmDataSearch";
export default class LiveObjectsApi {
    accounting: Accounting;
    dmDataSearch: DmDataSearch;
    constructor(config: LiveObjectsConfig);
}
