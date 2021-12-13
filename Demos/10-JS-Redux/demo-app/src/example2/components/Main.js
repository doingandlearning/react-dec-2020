import React from 'react';
import {createStore, combineReducers} from 'redux'

import stateData from '../data/initialState.json'
import {products, sort} from '../code/reducers'
import ProductList from './ProductList'

const store = createStore(
	combineReducers({products, sort}),
	stateData
)

function Main() {

    // [START OF HACK] -----------------------------------------------------------------------------------
    // Force this component to re-render whenever Redux store changes (we'll see "correct" approach later)

    const [dummy, setDummy] = React.useState(undefined)

    React.useEffect(() => {
        console.log("In Example2 Main component, subscribing to Redux store")
        const unsubscribe = store.subscribe(() => {
            setDummy(new Date())  // Update component's dummy state, forces React to re-render component.
        })
        return () => {
            console.log("In Example2 Main component, unsubscribing from Redux store")
            unsubscribe()
        }
    }, [])

    // [END OF HACK] -------------------------------------------------------------------------------------

    return (
        <div>
            <ProductList store={store} />
        </div>
    )
}
export default Main