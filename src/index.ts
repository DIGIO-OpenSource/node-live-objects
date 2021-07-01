import { LiveObjectsConfig } from "./types/options";

export default class LiveObjectsApi {

  api_key: string;

  constructor( config: LiveObjectsConfig){
    this.api_key = config.api_key;
  }

  getApiKey(){
    return this.api_key;
  }
}
