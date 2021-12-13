import { Action, ActionType } from './types'

// TODO: 
// Modify the books() reducer function as follows:
//
//  - If the action.type is ActionType.GET_BOOKS_FINISHED,
//    then it means the action.payload contains the book data returned from the REST service.
//    This data is an array of plain-old-JavaScript objects. 
//    Iterate through this array and map each JavaScript object into a fully-fledged Book object.
//    Then return the array of Book objects back to Redux, to say "here's the new state of the 'books' state in Redux store". 
//
//  - If the action type is anything else, then just return the state as-is.
//
export function books(state: any = [], action: Action) {
	return state
}

// TODO: 
// Modify the films() reducer function, in a similar fashion to the books() reducer function above.
//
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

