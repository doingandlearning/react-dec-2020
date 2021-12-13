import {put, call, takeEvery, all} from 'redux-saga/effects'
import {ActionType} from './types'

// ------------------------------------------------------------------------------------
// Simple sagas, same as previous example.
// ------------------------------------------------------------------------------------

// Our simple "hello world" saga.
export function * helloWorldSaga() {
	console.log('Hello from helloWorldSaga in Example3!')
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

// Worker Saga for async increment.
function * incrementAsync() {

	console.log('Hello from incrementAsync in Example3!')

	console.log("incrementAsync() generator function delaying for 1 sec, then put(ActionType.INCREMENT_COUNTER)")
  	yield delay(1000)
  	yield put({ type: ActionType.INCREMENT_COUNTER })

	console.log("incrementAsync() generator function delaying for 1 sec, then put(ActionType.INCREMENT_COUNTER)")
  	yield delay(1000)
  	yield put({ type: ActionType.INCREMENT_COUNTER })

	console.log("incrementAsync() generator function delaying for 1 sec, then put(ActionType.INCREMENT_COUNTER)")
  	yield delay(1000)
  	yield put({ type: ActionType.INCREMENT_COUNTER })
}

// Worker Saga for async increment, alternative implementation.
function * incrementAsyncV2() {
	console.log('Hello from incrementAsyncV2 in Example3!')
	for (let i = 0; i < 10; i++) {
		console.log("incrementAsyncV2() generator function delaying for 1 sec, then put")
  		yield delay(1000)
  		yield put({ type: ActionType.INCREMENT_COUNTER })
	}
}

// Watcher saga, spawns incrementAsync on each INCREMENT_COUNTER_ASYNC action.
function * watchIncrementAsync() {
	console.log('Hello from watchIncrementAsync in Example3!')
	yield takeEvery(ActionType.INCREMENT_COUNTER_ASYNC, incrementAsync)
}

// ------------------------------------------------------------------------------------
// Sagas for async REST call.
// ------------------------------------------------------------------------------------

// REST client uses the JavaScript fetch() API and async/await keywords. Returns a Promise.
async function myRestClient() {
	const response = await window.fetch('http://localhost:8080/api/thumbnailUrls')
	if (response.ok) {
		return await response.json();
	}
	else {
		throw Error(response.statusText);
	}
}

// Alternative REST client, uses XMLHttpRequest to do the REST request. Returns a Promise.
function myRestClientV2() {

	return new Promise((resolve, reject) => {	
		const request = new XMLHttpRequest()
		request.open('GET', 'http://localhost:8080/api/thumbnailUrls')

		request.onload = () => (request.status === 200) ? 
			resolve(JSON.parse(request.response)) : 
			reject(Error(request.statusText))

		request.onerror = err => reject(err)

		request.send()
	})
}

// Worker Saga for async REST request.
function * getThumbnailUrlsAsync() : any {
	console.log('Hello from getThumbnailUrlsAsync in Example3!')
	try {
		console.log("getThumbnailUrlsAsync() generator function about to call REST service")
		const response = yield call(myRestClient)
		console.log("getThumbnailUrlsAsync() generator function about to put an action, with success result of REST service")
		yield put({ type: ActionType.GET_THUMBNAIL_URLS_FINISHED, payload: response.join(", ") })
	} catch (e) {
		console.log("getThumbnailUrlsAsync() generator function about to put an action, with error result of REST service")
		yield put({ type: ActionType.GET_THUMBNAIL_URLS_FINISHED, payload: "REST call failed" })
	}
}

// Watcher saga, spawns getThumbnailUrlsAsync on each GET_THUMBNAIL_URLS action.
function * watchGetThumbnailUrlsAsync() {
	console.log('Hello from watchGetThumbnailUrlsAsync in Example3!')
	yield takeEvery(ActionType.GET_THUMBNAIL_URLS, getThumbnailUrlsAsync)
}

// Define a "root saga", a single entrypoint saga that will start all sagas at once.
// This is the only saga that we export to the outside world.
export default function * rootSaga() {
	console.log('Hello from rootSaga in Example3!')
	yield all([
		helloWorldSaga(),
		watchIncrementAsync(),
		watchGetThumbnailUrlsAsync()
	])
}