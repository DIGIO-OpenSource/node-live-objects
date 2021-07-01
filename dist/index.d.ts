import { LiveObjectsConfig } from "./types/options";
export default class LiveObjectsApi {
    api_key: string;
    constructor(config: LiveObjectsConfig);
    getApiKey(): string;
}
