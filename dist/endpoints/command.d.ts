import { CreateCommandOptions, DeleteCommandOptions, GetCommandListOptions, GetCommandOptions, GetCommandStatusOptions, UpdateCommandStatusOptions } from '../types/endpoints/command/options';
export default class Command {
    constructor();
    getCommand(options: GetCommandOptions): Promise<any>;
    deleteCommand(options: DeleteCommandOptions): Promise<any>;
    getCommandStatus(options: GetCommandStatusOptions): Promise<any>;
    updateCommandStatus(options: UpdateCommandStatusOptions): Promise<any>;
    createCommand(options: CreateCommandOptions): Promise<any>;
    getCommandList(options: GetCommandListOptions): Promise<any>;
}
