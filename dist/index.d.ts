import { LiveObjectsConfig } from "./types/endpoints/general/options";
import { GetMonthlyAccountingMetricsOptions } from "./types/endpoints/accounting/options";
export default class LiveObjectsApi {
    api_key: string;
    constructor(config: LiveObjectsConfig);
    getMonthlyAccountingMetrics(options: GetMonthlyAccountingMetricsOptions): Promise<any>;
    getApiKey(): string;
}
