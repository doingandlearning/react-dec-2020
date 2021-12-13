// JavaScript doesn't support enums. You can emulate an enum as an object literal as follows:
export const ActionType = {
    INCREMENT_COUNTER: "example2/INCREMENT_COUNTER",
    DECREMENT_COUNTER: "example2/DECREMENT_COUNTER",
    INCREMENT_COUNTER_ASYNC: "example2/INCREMENT_COUNTER_ASYNC"
}

// JavaScript doesn't support interfaces, because there are no compile-time type checks.
/*
export interface Action {
    type: ActionType,
    payload: any
}
*/
