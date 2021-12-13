import { Action, ActionType } from './types'
import Book from '../Book'
import Film from '../Film'

export function books(state: any = [], action: Action) {
	switch (action.type) {
		case ActionType.GET_BOOKS_FINISHED:
			return action.payload.map((obj:any, i: number) => new Book(obj.title, obj.author))
		default:
			return state
	}
}

export function films(state: any = [], action: Action) {
	switch (action.type) {
		case ActionType.GET_FILMS_FINISHED:
			return action.payload.map((obj:any, i: number) => new Film(obj.name, obj.genre, obj.blurb))
		default:
			return state
	}
}

export function format(state: any = {}, action: Action) {
	switch (action.type) {
		case ActionType.FORMAT_ITEMS:
			return action.payload			
		default:
			return state
	}
}

