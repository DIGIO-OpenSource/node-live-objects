"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const enpoints_1 = require("../constants/enpoints");
const http_call_1 = require("../services/http-call");
class Accounting {
    constructor() { }
    getMonthlyAccountingMetrics(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const call = new http_call_1.default();
            try {
                const result = yield call.request({
                    method: 'get',
                    url: enpoints_1.URLS.ACCOUNTING.GET_MONTHLY_ACCOUNTING_METRICS,
                    params: options
                });
                return result.data;
            }
            catch (e) {
                throw new Error(e.message);
            }
        });
    }
    getDailyAccountingMetrics(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const call = new http_call_1.default();
            try {
                const result = yield call.request({
                    method: 'get',
                    url: enpoints_1.URLS.ACCOUNTING.GET_DAILY_ACCOUNTING_METRICS,
                    params: options
                });
                return result.data;
            }
            catch (e) {
                throw new Error(e.message);
            }
        });
    }
}
exports.default = Accounting;
