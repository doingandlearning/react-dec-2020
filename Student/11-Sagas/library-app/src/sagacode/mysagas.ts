import {ActionType} from '../reduxcode/types'


// REST client uses the JavaScript fetch() API and async/await keywords. Returns a Promise.
async function myRestClient(path: String) {
	const response = await window.fetch('http://localhost:8080/api/' + path)
	if (response.ok) {
		return await response.json();
	}
	else {
		throw Error(response.statusText);
	}
}


function * getBooksAsync() : any {

	// TODO:
	//  - Invoke the call() function, to tell Saga to call myRestClient() with a path parameter of 'books'.
	//    Then use the yield statement to yield back to Saga.
	//
	//  - Then invoke the put() function, to tell Saga to dispatch an action to Redux with the result of the REST call. 
	//    On the action object, set the 'type' property to ActionType.GET_BOOKS_FINISHED, and set the 'payload' to the REST response.
	//    Then use the yield statement to yield back to Saga.
	//
	//  - Wrap all of the above in a giant try-catch block. 
	//    In the catch block, invoke the put() function to dispatch an ActionType.GET_BOOKS_FINISHED action with an error payload.


}


function * getFilmsAsync() : any {

	// TODO:
	// Implement this function in a similar way to getBooksAsync() above, but to get films data.
	
	
}


function * watchGetBooksAsync() {

	// TODO: 
	//  - Invoke the takeEvery() function, so that whenever Redux receives an ActionType.GET_BOOKS action, 
	//    it spawns the getBooksAsync Saga function to kick-off a "get books" REST request.


}

function * watchGetFilmsAsync() {

	// TODO: 
	//  - Invoke the takeEvery() function, so that whenever Redux receives an ActionType.GET_FILMS action, 
	//    it spawns the getFilmsAsync Saga function to kick-off a "get films" REST request.


}


export default function * rootSaga() {

	// TODO:
	//  - Invoke the all() function, to tell Saga to run the following Watcher Sagas in parallel:
	//	  [ watchGetBooksAsync(), watchGetFilmsAsync() ]
	

}