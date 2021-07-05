"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accounting_1 = require("./endpoints/accounting");
const dmDataSearch_1 = require("./endpoints/dmDataSearch");
const command_1 = require("./endpoints/command");
const axios_1 = require("axios");
class LiveObjectsApi {
    constructor(config) {
        axios_1.default.defaults.headers.common['X-API-Key'] = config.api_key;
        this.accounting = new accounting_1.default();
        this.dmDataSearch = new dmDataSearch_1.default();
        this.command = new command_1.default();
    }
}
exports.default = LiveObjectsApi;
