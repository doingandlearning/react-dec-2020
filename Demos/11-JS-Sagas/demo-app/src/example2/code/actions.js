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

export function incrementAsync() {
	return {
		type: ActionType.INCREMENT_COUNTER_ASYNC
	}
}
