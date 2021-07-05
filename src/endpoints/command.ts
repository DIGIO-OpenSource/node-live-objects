import { URLS } from '../constants/enpoints'
import HttpCall from '../services/http-call'
import { LiveObjectsConfig } from "../types/endpoints/general/options";
import { CreateCommandOptions, DeleteCommandOptions, GetCommandListOptions, GetCommandOptions, GetCommandStatusOptions, UpdateCommandStatusOptions } from '../types/endpoints/command/options';
import { formatRoute } from '../utils/url';

export default class Command{

  private api_key: string;

  constructor( config: LiveObjectsConfig){
    this.api_key = config.api_key;
  }

  async getCommand(options: GetCommandOptions): Promise<any>{
    const call =  new HttpCall({
      apiKey: this.api_key
    });

    try{
      const result = await call.get({
        url: formatRoute(URLS.COMMANDS.GET,[
          {
            name: ':commandId',
            value: options.commandId
          }
        ])
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async deleteCommand(options: DeleteCommandOptions): Promise<any>{
    const call =  new HttpCall({
      apiKey: this.api_key
    });

    try{
      const result = await call.delete({
        url: formatRoute(URLS.COMMANDS.DELETE,[
          {
            name: ':commandId',
            value: options.commandId
          }
        ])
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async getCommandStatus(options: GetCommandStatusOptions): Promise<any>{
    const call =  new HttpCall({
      apiKey: this.api_key
    });

    try{
      const result = await call.get({
        url: formatRoute(URLS.COMMANDS.GET_STATUS,[
          {
            name: ':commandId',
            value: options.commandId
          }
        ])
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async updateCommandStatus(options: UpdateCommandStatusOptions): Promise<any>{
    const call =  new HttpCall({
      apiKey: this.api_key
    });

    try{
      const result = await call.put({
        url: formatRoute(URLS.COMMANDS.UPDATE_STATUS,[
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
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async createCommand(options: CreateCommandOptions): Promise<any>{
    const call =  new HttpCall({
      apiKey: this.api_key
    });

    try{
      const result = await call.post({
        url: formatRoute(URLS.COMMANDS.CREATE,[
          {
            name: ':deviceId',
            value: options.deviceId
          }
        ]),
        params: {
          validate: options.validate || true
        },
        data: options.command
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async getCommandList(options: GetCommandListOptions): Promise<any>{
    const call =  new HttpCall({
      apiKey: this.api_key
    });

    try{
      const result = await call.get({
        url: formatRoute(URLS.COMMANDS.LIST,[
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
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

}