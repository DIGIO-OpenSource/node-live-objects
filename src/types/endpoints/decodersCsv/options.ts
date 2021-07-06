export interface ListCsvOptions{
  tags: Array<string>
}

export interface CreateCsvOptions{
  csvPayloadDescription: object
}

export interface TestCsvOptions{
  dataDecodingTestRequest: object
}

export interface GetCsvOptions{
  decoderId: string
}

export interface UpdateCsvOptions{
  csvPayloadDescription: object,
  decoderId: string
}

export interface DeleteCsvOptions{
  decoderId: string
}

export interface ActivateCsvOptions{
  decoderId: string,
  enabled: boolean
}