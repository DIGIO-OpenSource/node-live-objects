const URLS ={
  ACCOUNTING: {
    GET_DAILY_ACCOUNTING_METRICS: '/v1/accounting/daily',
    GET_MONTHLY_ACCOUNTING_METRICS: '/v1/accounting/monthly'
  },
  DM_DATA_SEARCH: {
    SEARCH: '/v1/data/search',
    SEARCH_HITS: '/v1/data/search/hits'
  },
  COMMANDS: {
    GET: '/v1/deviceMgt/commands/:commandId',
    DELETE: '/v1/deviceMgt/commands/:commandId',
    GET_STATUS: '/v1/deviceMgt/commands/:commandId/status',
    UPDATE_STATUS: '/v1/deviceMgt/commands/:commandId/status',
    LIST: '/v1/deviceMgt/devices/:deviceId/commands',
    CREATE: '/v1/deviceMgt/devices/:deviceId/commands'
  },
  DEVICE_CONFIGURATION: {
    GET: '/v1/deviceMgt/devices/:deviceId/config',
    SET: '/v1/deviceMgt/devices/:deviceId/config',
    GET_PARAMETERS: '/v1/deviceMgt/devices/:deviceId/config/parameters',
    GET_PARAMETER_STATE: '/v1/deviceMgt/devices/:deviceId/config/parameters/:paramKey',
    UPDATE_PARAMETER_STATE: '/v1/deviceMgt/devices/:deviceId/config/parameters/:paramKey/status'
  },
  DEVICE_INVENTORY: {
    LIST: '/v1/deviceMgt/devices',
    CREATE: '/v1/deviceMgt/devices',
    GET: '/v1/deviceMgt/devices/:deviceId',
    DELETE: '/v1/deviceMgt/devices/:deviceId',
    UPDATE: '/v1/deviceMgt/devices/:deviceId',
    GET_STREAMID: '/v1/deviceMgt/devices/:deviceId/data/streams'
  }

}

export {URLS}