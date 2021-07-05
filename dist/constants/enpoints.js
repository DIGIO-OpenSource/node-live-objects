"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLS = void 0;
const URLS = {
    ACCOUNTING: {
        GET_DAILY_ACCOUNTING_METRICS: '/v1/accounting/daily',
        GET_MONTHLY_ACCOUNTING_METRICS: '/v1/accounting/monthly'
    },
    DM_DATA_SEARCH: {
        SEARCH: '/v1/data/search',
        SEARCH_HITS: '/v1/data/search/hits'
    },
    COMMANDS: {
        GET: '/v1/deviceMgt/commands/:commandId',
        DELETE: '/v1/deviceMgt/commands/:commandId',
        GET_STATUS: '/v1/deviceMgt/commands/:commandId/status',
        UPDATE_STATUS: '/v1/deviceMgt/commands/:commandId/status',
        LIST: '/v1/deviceMgt/devices/:deviceId/commands',
        CREATE: '/v1/deviceMgt/devices/:deviceId/commands'
    }
};
exports.URLS = URLS;
