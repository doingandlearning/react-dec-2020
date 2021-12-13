import { ActionType } from './types'

export function increment() {
	return {
		type: ActionType.INCREMENT_COUNTER
	}
}

export function decrement() {
	return {
		type: ActionType.DECREMENT_COUNTER
	}
}