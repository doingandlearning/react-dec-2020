export enum ActionType {
    ADD_PRODUCT,
    LIKE_PRODUCT,
    REMOVE_PRODUCT,
    SORT_PRODUCTS
}

export interface Action {
    type: ActionType,
    payload: any
}

export enum SortedBy {
    DESCRIPTION,
    PRICE,
    LIKES
}

