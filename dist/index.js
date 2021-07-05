"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*import { GetMonthlyAccountingMetricsOptions } from "./types/endpoints/accounting/options";
import HttpCall from './services/http-call'*/
const accounting_1 = require("./endpoints/accounting");
const dmDataSearch_1 = require("./endpoints/dmDataSearch");
class LiveObjectsApi {
    constructor(config) {
        this.accounting = new accounting_1.default({ api_key: config.api_key });
        this.dmDataSearch = new dmDataSearch_1.default({ api_key: config.api_key });
    }
}
exports.default = LiveObjectsApi;
