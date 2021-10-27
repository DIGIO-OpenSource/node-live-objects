const URLS = {
  ACCOUNTING: {
    GET_DAILY_ACCOUNTING_METRICS: '/v1/accounting/daily',
    GET_MONTHLY_ACCOUNTING_METRICS: '/v1/accounting/monthly'
  },
  DM_DATA_SEARCH: {
    SEARCH: '/v1/data/search',
    SEARCH_HITS: '/v1/data/search/hits'
  },
  DM_DATA_STORE: {
    GET: '/v0/data/streams/:streamId',
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
  },
  EVENT_PROCESSING: {
    CREATE_CONTEXT: '/v0/eventprocessing/context/:contextKey',
    CREATE_RULE_TEST: '/v0/eventprocessing/stateprocessing-rule/test',
    CREATE_RULE: '/v0/eventprocessing/stateprocessing-rule',
    UPDATE_RULE: '/v0/eventprocessing/stateprocessing-rule/:stateProcessingRuleId'
  },
  EVENT_ACTIVITY: {
    LIST_RULE: '/v0/eventprocessing/activity/rules',
    CREATE_RULE: '/v0/eventprocessing/activity/rules',
    GET_RULE: '/v0/eventprocessing/activity/rules/:activityRuleId',
    UPDATE_RULE: '/v0/eventprocessing/activity/rules/:activityRuleId',
    DELETE_RULE: '/v0/eventprocessing/activity/rules/:activityRuleId',
    LIST_STATES: '/v0/eventprocessing/activity/states',
    MUTE_STATE: '/v0/eventprocessing/activity/states/mute'
  },
  DECODERS_CSV: {
    LIST: '/v0/decoders/csv',
    CREATE: '/v0/decoders/csv',
    TEST: '/v0/decoders/csv/test',
    UPDATE: '/v0/decoders/csv/:decoderId',
    GET: '/v0/decoders/csv/:decoderId',
    DELETE: '/v0/decoders/csv/:decoderId',
    ACTIVATE: '/v0/decoders/csv/:decoderId/enabled'
  },
  TRIGGERS_ACTIONS_POLICES: {
    CREATE_ACTION_POLICES: '/v1/event2action/actionPolicies',
  },
}

export {URLS}