import {URLS} from '../constants/enpoints'
import HttpCall from '../services/http-call'
import { CreateRuleOptions, DeleteRuleOptions, GetRuleOptions, ListRuleOptions, ListStatesOptions, MuteStateOptions, UpdateRuleOptions } from '../types/endpoints/deviceActivity/options';
import { formatRoute } from '../utils/url';

export default class EventActivity{

  constructor(){}

  async listRule(options: ListRuleOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'get',
        url: URLS.EVENT_ACTIVITY.LIST_RULE,
        params:{
          name: options?.name
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
        url: URLS.EVENT_ACTIVITY.CREATE_RULE,
        data: options?.activityRule
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async getRule(options: GetRuleOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'get',
        url: formatRoute(URLS.EVENT_ACTIVITY.GET_RULE,[{
            name: ':activityRuleId',
            value: options?.activityRuleId
        }])
        
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
        url: formatRoute(URLS.EVENT_ACTIVITY.UPDATE_RULE,[{
            name: ':activityRuleId',
            value: options?.activityRuleId
        }]),
        data: options?.activityRule
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async deleteRule(options: DeleteRuleOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'delete',
        url: formatRoute(URLS.EVENT_ACTIVITY.UPDATE_RULE,[{
            name: ':activityRuleId',
            value: options?.activityRuleId
        }])
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async listStates(options: ListStatesOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'get',
        url: URLS.EVENT_ACTIVITY.LIST_STATES,
        params: options
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }

  async muteState(options: MuteStateOptions): Promise<any>{
    const call =  new HttpCall();

    try{
      const result = await call.request({
        method: 'put',
        url: URLS.EVENT_ACTIVITY.MUTE_STATE,
        data: options?.nextAlarmRequest
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }
}