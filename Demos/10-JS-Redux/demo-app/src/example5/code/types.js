// JavaScript doesn't support enums. You can emulate an enum as an object literal as follows:
export const ActionType = {
    ADD_PRODUCT: 'ADD_PRODUCT',
    LIKE_PRODUCT: 'LIKE_PRODUCT',
    REMOVE_PRODUCT: 'REMOVE_PRODUCT',
    SORT_PRODUCTS: 'SORT_PRODUCTS'
}

// JavaScript doesn't support interfaces, because there are no compile-time type checks.
/*
export interface Action {
    type: ActionType,
    payload: any
}
*/

// JavaScript doesn't support enums, we use an object literal again:
export const SortedBy = {
    DESCRIPTION: 'DESCRIPTION',
    PRICE: 'PRICE',
    LIKES: 'LIKES'
}

