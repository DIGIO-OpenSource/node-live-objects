enum StatusCommand {
	CANCELED, ERROR, EXPIRED, PENDING, PROCESSED, PROCESSING, RETRYING, UNKNOWN
}

export interface GetCommandOptions{
	commandId: string;
}

export interface DeleteCommandOptions{
	commandId: string;
}

export interface GetCommandStatusOptions{
	commandId: string;
}

export interface UpdateCommandStatusOptions{
	commandId: string
	force?: boolean,
	newStatus: StatusCommand
}

export interface GetCommandListOptions{
	deviceId: string
	from?: string,
	limit?: number,
	offset?: number,
	sort?: Array<string>,
	to?: string,
	totalCount?: boolean
}

export interface CreateCommandOptions{
	deviceId: string,
	validate?: boolean,
	command: object
}