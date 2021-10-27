interface FifoPublish {
	fifoName: string;
}

interface Action {
	fifoPublish: Array<FifoPublish>;
}

interface Filter {
	ruleIds: Array<string>;
}

interface StateChange {
	filter: Filter;
}

interface Triggers {
	stateChange: StateChange;
}

export interface ActionOptions{
	actions: Action;
    enabled: boolean;
    name: string;
    triggers: Triggers;
}