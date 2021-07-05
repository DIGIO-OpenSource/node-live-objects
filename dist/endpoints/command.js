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
const url_1 = require("../utils/url");
class Command {
    constructor() { }
    getCommand(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const call = new http_call_1.default();
            try {
                const result = yield call.request({
                    method: 'get',
                    url: url_1.formatRoute(enpoints_1.URLS.COMMANDS.GET, [
                        {
                            name: ':commandId',
                            value: options.commandId
                        }
                    ])
                });
                return result.data;
            }
            catch (e) {
                throw new Error(e.message);
            }
        });
    }
    deleteCommand(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const call = new http_call_1.default();
            try {
                const result = yield call.request({
                    method: 'delete',
                    url: url_1.formatRoute(enpoints_1.URLS.COMMANDS.DELETE, [
                        {
                            name: ':commandId',
                            value: options.commandId
                        }
                    ])
                });
                return result.data;
            }
            catch (e) {
                throw new Error(e.message);
            }
        });
    }
    getCommandStatus(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const call = new http_call_1.default();
            try {
                const result = yield call.request({
                    method: 'get',
                    url: url_1.formatRoute(enpoints_1.URLS.COMMANDS.GET_STATUS, [
                        {
                            name: ':commandId',
                            value: options.commandId
                        }
                    ])
                });
                return result.data;
            }
            catch (e) {
                throw new Error(e.message);
            }
        });
    }
    updateCommandStatus(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const call = new http_call_1.default();
            try {
                const result = yield call.request({
                    method: 'put',
                    url: url_1.formatRoute(enpoints_1.URLS.COMMANDS.UPDATE_STATUS, [
                        {
                            name: ':commandId',
                            value: options.commandId
                        }
                    ]),
                    params: {
                        force: options.force
                    },
                    data: {
                        dslRequest: options.newStatus
                    }
                });
                return result.data;
            }
            catch (e) {
                throw new Error(e.message);
            }
        });
    }
    createCommand(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const call = new http_call_1.default();
            try {
                const result = yield call.request({
                    method: 'post',
                    url: url_1.formatRoute(enpoints_1.URLS.COMMANDS.CREATE, [
                        {
                            name: ':deviceId',
                            value: options.deviceId
                        }
                    ]),
                    params: {
                        validate: options.validate || true
                    },
                    data: options.command
                });
                return result.data;
            }
            catch (e) {
                throw new Error(e.message);
            }
        });
    }
    getCommandList(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const call = new http_call_1.default();
            try {
                const result = yield call.request({
                    method: 'get',
                    url: url_1.formatRoute(enpoints_1.URLS.COMMANDS.LIST, [
                        {
                            name: ':deviceId',
                            value: options.deviceId
                        }
                    ]),
                    params: {
                        from: options.from,
                        limit: options.limit,
                        offset: options.offset,
                        sort: options.sort,
                        to: options.to
                    },
                    headers: {
                        'X-Total-Count': options.totalCount || true
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
exports.default = Command;
