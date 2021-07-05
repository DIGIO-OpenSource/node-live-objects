"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatRoute = void 0;
const formatRoute = (route, params) => {
    let routeWithParams = route;
    params.forEach((item) => {
        routeWithParams = routeWithParams.replace(new RegExp(`${item.name}\\b`), item.value);
    });
    return routeWithParams;
};
exports.formatRoute = formatRoute;
