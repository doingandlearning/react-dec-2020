import { ActionType, SortedBy } from './types'

let nextId = 100  // Simplified

// We've tweaked the actions to follow common convention - all the data for an action is in a "payload" property.
// Also see the ActionType enum, which enumerates the allowed actions (better than strings).
export function addProduct(description: string, price: number) {
	return {
		type: ActionType.ADD_PRODUCT,
		payload: {
			id: nextId++,
			description: description,
			price: price,
			likes: 0,
			mostRecentLike: null
		}
	}
}

export function likeProduct(id: number) {
	return {
		type: ActionType.LIKE_PRODUCT,
		payload: id
	}
}

export function removeProduct(id: number) {
	return {
		type: ActionType.REMOVE_PRODUCT,
		payload: id
	}
}

export function sortProducts(sortByField: string) {

	let sortBy : SortedBy

	if (sortByField === "description")
		sortBy = SortedBy.DESCRIPTION
	else if (sortByField === "price")
		sortBy = SortedBy.PRICE
	else 
		sortBy = SortedBy.LIKES

	return {
		type: ActionType.SORT_PRODUCTS,
		payload: sortBy
	}
}
