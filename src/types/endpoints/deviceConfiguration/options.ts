enum StatusParameter {
  CANCELED, FAILED, NONE, OK, PENDING, SENT
}

export interface GetConfigurationOptions{
  deviceId: string
}

export interface SetConfigurationOptions{
  deviceId: string,
  req: object
}

export interface GetParametersOptions{
  deviceId: string
}

export interface GetParameterStateOptions{
  deviceId: string,
  paramKey: string
}

export interface UpdateParameterStateOptions{
  deviceId: string,
  force?: boolean,
  newStatus: StatusParameter,
  paramKey: string
}