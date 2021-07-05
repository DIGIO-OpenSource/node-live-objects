import { GetDailyAccountingMetricsOptions, GetMonthlyAccountingMetricsOptions } from "../types/endpoints/accounting/options";
export default class Accounting {
    constructor();
    getMonthlyAccountingMetrics(options: GetMonthlyAccountingMetricsOptions): Promise<any>;
    getDailyAccountingMetrics(options: GetDailyAccountingMetricsOptions): Promise<any>;
}
