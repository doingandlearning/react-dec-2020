import {put, takeEvery, all} from 'redux-saga/effects'
import {ActionType} from './types'

// Our simple "hello world" saga, same as in previous example.
export function * helloWorldSaga() {
	console.log('Hello from helloWorldSaga in Example2!')
}

const delay = ms => new Promise(res => setTimeout(res, ms))

// Worker saga, perforsm async increment task.
function * incrementAsync() {

	console.log('Hello from incrementAsync in Example2!')

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

// Worker saga, alternative implementation.
function * incrementAsyncV2() {
	console.log('Hello from incrementAsyncV2 in Example2!')
	for (let i = 0; i < 10; i++) {
		console.log("incrementAsyncV2() generator function delaying for 1 sec, then put(ActionType.INCREMENT_COUNTER)")
  		yield delay(1000)
  		yield put({ type: ActionType.INCREMENT_COUNTER })
	}
}

// Watcher saga, spawns incrementAsync on each INCREMENT_COUNTER_ASYNC action.
function * watchIncrementAsync() {
	console.log('Hello from watchIncrementAsync in Example2!')
	yield takeEvery(ActionType.INCREMENT_COUNTER_ASYNC, incrementAsync)
}

// Define a "root saga", a single entrypoint saga that will start all sagas at once.
// This is the only saga that we export to the outside world.
export default function * rootSaga() {
	console.log('Hello from rootSaga in Example2!')
	yield all([
		helloWorldSaga(),
		watchIncrementAsync()
	])
}
