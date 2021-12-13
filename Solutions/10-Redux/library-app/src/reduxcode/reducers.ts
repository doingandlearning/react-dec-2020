import { Action, ActionType } from './types'

export function books(state: any = [], action: Action) {
	return state
}

export function films(state: any = [], action: Action) {
	return state
}

export function format(state: any = {}, action: Action) {
	switch (action.type) {
		case ActionType.FORMAT_ITEMS:
			return action.payload			
		default:
			return state
	}
}
