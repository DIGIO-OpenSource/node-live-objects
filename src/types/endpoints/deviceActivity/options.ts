export interface  ListRuleOptions{
  name?: string
}

export interface  CreateRuleOptions{
  activityRule: object
}

export interface GetRuleOptions{
  activityRuleId: string
}

export interface UpdateRuleOptions{
  activityRuleId: string,
  activityRule: object
}

export interface DeleteRuleOptions{
  activityRuleId: string,
}

export interface ListStatesOptions{
  activityRuleId?: string,
  bookmarkDeviceId?: string,
  deviceId?: string,
  limit?: number
}

export interface MuteStateOptions{
  nextAlarmRequest: object
}