import React from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import {myreducer} from '../code/reducers'
import Counter from './Counter'

import {applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {helloWorldSaga} from '../code/sagas'

// Create Saga middleware, will contain saga(s) to be run.
console.log("------------------------------------------------------------------------------------------------")
console.log("In example1/Main.tsx, before call to createSagaMiddleware()")
const sagaMiddleware = createSagaMiddleware()

// Create the Redux Store, and connect the saga middleware to it.
console.log("In example1/Main.tsx, before call to createStore()")
const store = createStore(
    myreducer,
    {counterValue: 0},
    applyMiddleware(sagaMiddleware)
)

// Start the saga middleware.
console.log("In example1/Main.tsx, before call to run(aSaga)")
sagaMiddleware.run(helloWorldSaga)
console.log("In example1/Main.tsx, after call to run(aSaga)")

function Main() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}
export default Main