export enum ActionType {
    INCREMENT_COUNTER = "example1/INCREMENT_COUNTER",
    DECREMENT_COUNTER = "example1/DECREMENT_COUNTER"
}

export interface Action {
    type: ActionType,
    payload: any
}

