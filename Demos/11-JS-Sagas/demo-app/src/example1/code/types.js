// JavaScript doesn't support enums. You can emulate an enum as an object literal as follows:
export const ActionType = {
    INCREMENT_COUNTER: "example1/INCREMENT_COUNTER",
    DECREMENT_COUNTER: "example1/DECREMENT_COUNTER"
}

// JavaScript doesn't support interfaces, because there are no compile-time type checks.
/*
export interface Action {
    type: ActionType,
    payload: any
}
*/
