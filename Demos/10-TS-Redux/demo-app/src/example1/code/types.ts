// We use an enum to identify allowed actions. This is better than using strings.
export enum ActionType {
    ADD_PRODUCT,
    LIKE_PRODUCT,
    REMOVE_PRODUCT,
    SORT_PRODUCTS
}

// All the data for an action is now in a "payload" property. This is common convention.
export interface Action {
    type: ActionType,
    payload: any
}

export enum SortedBy {
    DESCRIPTION,
    PRICE,
    LIKES
}

