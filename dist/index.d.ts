import { LiveObjectsConfig } from "./types/endpoints/general/options";
import Accounting from './accounting';
export default class LiveObjectsApi {
    accounting: Accounting;
    constructor(config: LiveObjectsConfig);
}
