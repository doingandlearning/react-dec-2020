export enum ActionType {
    FORMAT_ITEMS        = "library/FORMAT_ITEMS",
    GET_BOOKS           = "library/GET_BOOKS",
    GET_BOOKS_FINISHED  = "library/GET_BOOKS_FINISHED",
    GET_FILMS           = "library/GET_FILMS",
    GET_FILMS_FINISHED  = "library/GET_FILMS_FINISHED"
}

export interface Action {
    type: ActionType,
    payload: any
}

