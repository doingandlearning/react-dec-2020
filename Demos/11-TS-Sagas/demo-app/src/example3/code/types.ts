export enum ActionType {
    INCREMENT_COUNTER           = "example3/INCREMENT_COUNTER",
    DECREMENT_COUNTER           = "example3/DECREMENT_COUNTER",
    INCREMENT_COUNTER_ASYNC     = "example3/INCREMENT_COUNTER_ASYNC",
    GET_THUMBNAIL_URLS          = "example3/GET_THUMBNAIL_URLS",
    GET_THUMBNAIL_URLS_FINISHED = "example3/GET_THUMBNAIL_URLS_FINISHED"
}

export interface Action {
    type: ActionType,
    payload: any
}

