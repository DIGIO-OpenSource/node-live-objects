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
const axios_1 = require("axios");
axios_1.default.defaults.baseURL = 'https://liveobjects.orange-business.com/api';
class HttpCall {
    constructor(config) {
        axios_1.default.defaults.headers.common['X-API-Key'] = config.apiKey;
    }
    get(options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default({
                    method: 'get',
                    url: options.url,
                    params: options.params
                });
                return response;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = HttpCall;
