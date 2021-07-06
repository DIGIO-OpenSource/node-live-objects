enum ActivityStates {
  ACTIVE, SILENT, UNKNOWN, NOT_MONITORED
}
enum InterfaceStatus{
  REGISTERED, INITIALIZING, INITIALIZED, ONLINE, OFFLINE, ACTIVATED, REACTIVATED, DEACTIVATED, CONNECTIVITY_ERROR
}

export interface GetDeviceListOptions{
  activityStates?: Array<ActivityStates>
  connectors?: Array<string>
  fields?: Array<string>
  filterQuery?: string
  groupId?: string
  groupPath?: string
  id?: string
  'interfaces.enabled'?: boolean
  'interfaces.nodeId'?: string
  'interfaces.status'?: Array<InterfaceStatus>
  limit?: number
  name?: string
  offset?: number
  sort?: Array<string>
  tags: Array<string>
  totalCount: boolean
}

export interface CreateDeviceOptions{
  body: object
}

export interface GetDeviceOptions{
  deviceId: string
}

export interface DeleteDeviceOptions{
  deviceId: string
}

export interface UpdateDeviceOptions{
  deviceId: string,
  deviceUpdate: object
}

export interface GetDeviceStreamIdOptions{
  deviceId: string,
  limit?: number
}