import { GetMonthlyAccountingMetricsOptions } from "./types/endpoints/accounting/options";
import { LiveObjectsConfig } from "./types/endpoints/general/options";
export default class Accounting {
    api_key: string;
    constructor(config: LiveObjectsConfig);
    getMonthlyAccountingMetrics(options: GetMonthlyAccountingMetricsOptions): Promise<any>;
}
