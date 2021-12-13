export enum ActionType {
    INCREMENT_COUNTER       = "example2/INCREMENT_COUNTER",
    DECREMENT_COUNTER       = "example2/DECREMENT_COUNTER",
    INCREMENT_COUNTER_ASYNC = "example2/INCREMENT_COUNTER_ASYNC"
}

export interface Action {
    type: ActionType,
    payload: any
}

