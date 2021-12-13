import React from 'react';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import stateData from '../data/initialState.json'
import {products, sort} from '../code/reducers'
import ProductList from './ProductList'
import AddProductForm from './AddProductForm'

const store = createStore(
	combineReducers({products, sort}),
	stateData
)

function Main() {

    /*
    // This hack is no longer needed. 
    // React Redux connects the Redux store to our components now, so if the store changes, our components re-render.
    //
    // [START OF HACK] -----------------------------------------------------------------------------------
    const [dummy, setDummy] = React.useState(undefined)

    React.useEffect(() => {
        console.log("In Example5 Main component, subscribing to Redux store")
        const unsubscribe = store.subscribe(() => {
            setDummy(new Date())  // Update component's dummy state, forces React to re-render component.
        })
        return () => {
            console.log("In Example5 Main component, unsubscribing from Redux store")
            unsubscribe()
        }
    }, [])

    // [END OF HACK] -------------------------------------------------------------------------------------
    */

    return (
        <div>
            { // Wrap child components in standard React Redux provider.
              // The React Redux provider connects the Redux store to React, so any changes cause re-render.
            }
            <Provider store={store}>
                <ProductList />
                <AddProductForm />
            </Provider>
        </div>
    )
}
export default Main