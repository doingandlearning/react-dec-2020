import { ActionType } from './types'

export function changeFormat(newFormat: String) {
	return {
		type: ActionType.FORMAT_ITEMS,
		payload: newFormat
	}
}

export function getBooks() {
	return {
		type: ActionType.GET_BOOKS
	}
}

export function getFilms() {
	return {
		type: ActionType.GET_FILMS
	}
}