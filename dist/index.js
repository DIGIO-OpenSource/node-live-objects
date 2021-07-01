"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LiveObjectsApi {
    constructor(config) {
        this.api_key = config.api_key;
    }
    getApiKey() {
        return this.api_key;
    }
}
exports.default = LiveObjectsApi;
