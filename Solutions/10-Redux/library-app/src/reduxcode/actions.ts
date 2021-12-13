import { ActionType } from './types'

export function changeFormat(newFormat: String) {
	return {
		type: ActionType.FORMAT_ITEMS,
		payload: newFormat
	}
}
