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
const http_call_1 = require("./services/http-call");
class Accounting {
    constructor(config) {
        this.api_key = config.api_key;
    }
    getMonthlyAccountingMetrics(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const call = new http_call_1.default({
                apiKey: this.api_key
            });
            const result = yield call.get({
                url: '/v1/accounting/monthly',
                params: options
            });
            return result.data;
        });
    }
}
exports.default = Accounting;
