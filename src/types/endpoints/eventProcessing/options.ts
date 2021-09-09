export interface ContextsOptions{
	contextData?: number;
    tags?: Array<string>;
    contextKey?: string;
}

export interface CreateRuleOptions{
	rule?: object;
}

export interface UpdateRuleOptions{
    stateProcessingRuleId?: string;
    ruleUpdate?: object;
}