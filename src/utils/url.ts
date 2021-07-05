import { UrlParam } from "../types/endpoints/general/options";

const formatRoute = (route: string, params: Array<UrlParam>) => {
  let routeWithParams = route;
  params.forEach((item: UrlParam) => {
    routeWithParams = routeWithParams.replace(new RegExp(`${item.name}\\b`), item.value);
  });
  return routeWithParams;
};

export {formatRoute}