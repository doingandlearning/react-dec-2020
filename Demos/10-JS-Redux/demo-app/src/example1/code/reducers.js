import {Action, ActionType, SortedBy} from './types'

export function product(state = {}, action) {
	switch (action.type) {
		case ActionType.ADD_PRODUCT:
			return {
				...state
			}
		case ActionType.LIKE_PRODUCT:
			return (state.id !== action.payload) ?
				state :
				{
					...state,
					likes: state.likes + 1,
					mostRecentLike: new Date()
				}
		default :
			return state
	}
}

export function products(state = [], action) {
	switch (action.type) {
		case ActionType.ADD_PRODUCT:
			return [
				...state,
				product(action.payload, action)
			]
		case ActionType.LIKE_PRODUCT:
			return state.map(
				p => product(p, action)
			)
		case ActionType.REMOVE_PRODUCT:
			return state.filter(
				p => p.id !== action.payload
			)
		default:
			return state
	}
}

export function sort(state=SortedBy.DESCRIPTION, action) {
	switch (action.type) {
		case ActionType.SORT_PRODUCTS:
			return action.payload
		default :
			return state
	}
}
