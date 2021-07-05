import { DmDataSearchOptions, DmDataSearchHitsOptions } from '../types/endpoints/dmDataSearch/options';
import { LiveObjectsConfig } from "../types/endpoints/general/options";
export default class DmDataSearch {
    private api_key;
    constructor(config: LiveObjectsConfig);
    search(options: DmDataSearchOptions): Promise<any>;
    searchHits(options: DmDataSearchHitsOptions): Promise<any>;
}
