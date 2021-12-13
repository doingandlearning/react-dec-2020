export enum ActionType {
    FORMAT_ITEMS = "library/FORMAT_ITEMS",
}

export interface Action {
    type: ActionType,
    payload: any
}