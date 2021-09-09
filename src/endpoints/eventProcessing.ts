import { ContextsOptions, CreateRuleOptions, UpdateRuleOptions } from "../types/endpoints/eventProcessing/options";
import {URLS} from '../constants/enpoints'
import HttpCall from '../services/http-call'
import { formatRoute } from '../utils/url';

export default class EventProcessing{

  constructor(){}

  async createContext(options: ContextsOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'put',
        url: formatRoute(URLS.EVENT_PROCESSING.CREATE_CONTEXT,[
          {
            name: ':contextKey',
            value: options.contextKey,
          }
        ]),
        data: {
          contextData: options.contextData,
          tags: options.tags,
        }
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async createRule(options: CreateRuleOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'post',
        url: URLS.EVENT_PROCESSING.CREATE_RULE,
        data: options.rule,
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async updateRule(options: UpdateRuleOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'put',
        url: formatRoute(URLS.EVENT_PROCESSING.UPDATE_RULE,[
          {
            name: ':stateProcessingRuleId',
            value: options.stateProcessingRuleId,
          }
        ]),
        data: options.ruleUpdate
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }


}