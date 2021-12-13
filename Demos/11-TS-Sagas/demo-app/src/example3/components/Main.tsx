import React from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import {myreducer} from '../code/reducers'
import Counter from './Counter'

import {applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../code/sagas'

// Create a Saga middleware, will contain saga(s) that listen for actions.
console.log("------------------------------------------------------------------------------------------------")
console.log("In example3/Main.tsx, before call to createSagaMiddleware()")
const sagaMiddleware = createSagaMiddleware()

// Create the Redux Store, and connect the saga middleware to it.
console.log("In example3/Main.tsx, before call to createStore()")
const store = createStore(
    myreducer,
    {counterValue: 0, thumbnailUrls: ''},
    applyMiddleware(sagaMiddleware)
)

// Start the root saga middleware.
console.log("In example3/Main.tsx, before call to run(aSaga)")
sagaMiddleware.run(rootSaga)
console.log("In example3/Main.tsx, after call to run(aSaga)")

function Main() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}
export default Main