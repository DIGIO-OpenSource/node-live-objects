import { AxiosResponse } from "axios";
import { DmDataSearchHitsOptions } from '../types/endpoints/dmDataSearch/options';
import { LiveObjectsConfig } from "../types/endpoints/general/options";
export default class DmDataSearch {
    private api_key;
    constructor(config: LiveObjectsConfig);
    searchHits(options: DmDataSearchHitsOptions): Promise<String | AxiosResponse>;
}
