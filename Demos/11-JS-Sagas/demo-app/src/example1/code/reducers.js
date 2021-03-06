import {Action, ActionType} from './types'

export function myreducer(state = {}, action) {
	switch (action.type) {
		case ActionType.INCREMENT_COUNTER:
			return {
				...state,
				counterValue: state.counterValue + 1
			}
		case ActionType.DECREMENT_COUNTER:
			return {
				...state,
				counterValue: state.counterValue - 1
			}
		default :
			return state
	}
}
