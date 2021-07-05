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
class DmDataSearch {
    constructor(config) {
        this.api_key = config.api_key;
    }
    searchHits(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const call = new http_call_1.default({
                apiKey: this.api_key
            });
            try {
                const result = yield call.post({
                    url: enpoints_1.URLS.DM_DATA_SEARCH.SEARCH_HITS,
                    params: {
                        trackTotalHits: options.trackTotalHits
                    },
                    data: {
                        dslRequest: options.dslRequest
                    }
                });
                return result.data;
            }
            catch (e) {
                throw new Error(e.message);
            }
        });
    }
}
exports.default = DmDataSearch;
