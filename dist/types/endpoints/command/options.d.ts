declare enum StatusCommand {
    CANCELED = 0,
    ERROR = 1,
    EXPIRED = 2,
    PENDING = 3,
    PROCESSED = 4,
    PROCESSING = 5,
    RETRYING = 6,
    UNKNOWN = 7
}
export interface GetCommandOptions {
    commandId: string;
}
export interface DeleteCommandOptions {
    commandId: string;
}
export interface GetCommandStatusOptions {
    commandId: string;
}
export interface UpdateCommandStatusOptions {
    commandId: string;
    force?: boolean;
    newStatus: StatusCommand;
}
export interface GetCommandListOptions {
    deviceId: string;
    from?: string;
    limit?: number;
    offset?: number;
    sort?: Array<string>;
    to?: string;
    totalCount?: boolean;
}
export interface CreateCommandOptions {
    deviceId: string;
    validate?: boolean;
    command: object;
}
export {};
