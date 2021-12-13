import {put, call, takeEvery, all} from 'redux-saga/effects'
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

// Worker Sagas for async REST requests.
function * getBooksAsync() : any {
	try {
		console.log('Getting books')
        const response = yield call(myRestClient, 'books')
		yield put({ type: ActionType.GET_BOOKS_FINISHED, payload: response })
	} catch (e) {
		yield put({ type: ActionType.GET_BOOKS_FINISHED, payload: 'REST call for Books failed' })
	}
}

function * getFilmsAsync() : any {
	try {
		console.log('Getting films')
        const response = yield call(myRestClient, 'films')
		yield put({ type: ActionType.GET_FILMS_FINISHED, payload: response})
	} catch (e) {
		yield put({ type: ActionType.GET_FILMS_FINISHED, payload: 'REST call for Films failed' })
	}
}

// Watcher Sagas, consume Redux actions and spawn appropriate Worker Sagas.
function * watchGetBooksAsync() {
	yield takeEvery(ActionType.GET_BOOKS, getBooksAsync)
}

function * watchGetFilmsAsync() {
	yield takeEvery(ActionType.GET_FILMS, getFilmsAsync)
}

// Define a "root saga", a single entrypoint saga that will start all sagas at once.
// This is the only saga that we export to the outside world.
export default function * rootSaga() {
	yield all([
		watchGetBooksAsync(),
		watchGetFilmsAsync()
	])
}