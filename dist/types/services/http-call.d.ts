export interface CallConfig {
    apiKey: string;
}
export interface GetOptions {
    url: string;
    params: object;
}
export interface PostOptions {
    url: string;
}
export interface ResponseError {
    config: object;
    request: object;
    response: {
        status: Number;
        statusText: string;
        header: object;
        config: object;
        data: object;
    };
}
