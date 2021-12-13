// JavaScript doesn't support enums. You can emulate an enum as an object literal as follows:
export const ActionType = {
    INCREMENT_COUNTER:           "example3/INCREMENT_COUNTER",
    DECREMENT_COUNTER:           "example3/DECREMENT_COUNTER",
    INCREMENT_COUNTER_ASYNC:     "example3/INCREMENT_COUNTER_ASYNC",
    GET_THUMBNAIL_URLS:          "example3/GET_THUMBNAIL_URLS",
    GET_THUMBNAIL_URLS_FINISHED: "example3/GET_THUMBNAIL_URLS_FINISHED"
}

// JavaScript doesn't support interfaces, because there are no compile-time type checks.
/*
export interface Action {
    type: ActionType,
    payload: any
}
*/
