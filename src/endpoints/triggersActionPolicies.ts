import { ActionOptions } from "../types/endpoints/triggersActionPolicies/options";
import {URLS} from '../constants/enpoints'
import HttpCall from '../services/http-call'
import { formatRoute } from '../utils/url';

export default class TriggersActionPolicies{

  constructor(){}

  async createActionPolicies(options: ActionOptions): Promise<any>{
    const call =  new HttpCall();

     try{
      const result = await call.request({
        method: 'post',
        url: URLS.TRIGGERS_ACTIONS_POLICES.CREATE_ACTION_POLICES,
        data: options,
      })
      return result.data
    }
    catch(e){
      throw new Error(e.message);
    }
  }


}