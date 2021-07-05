import { DmDataSearchOptions, DmDataSearchHitsOptions } from '../types/endpoints/dmDataSearch/options';
export default class DmDataSearch {
    constructor();
    search(options: DmDataSearchOptions): Promise<any>;
    searchHits(options: DmDataSearchHitsOptions): Promise<any>;
}
