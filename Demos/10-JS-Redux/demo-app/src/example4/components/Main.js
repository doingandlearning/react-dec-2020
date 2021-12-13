import React from 'react';
import {createStore, combineReducers} from 'redux'

import stateData from '../data/initialState.json'
import {products, sort} from '../code/reducers'
import ProductList from './ProductList'
import AddProductForm from './AddProductForm'

// Note we've defined a "provider" and "context", see code/contexts.ts. 
import {MyReduxStoreProvider} from '../code/contexts'

const store = createStore(
	combineReducers({products, sort}),
	stateData
)

function Main() {

    // [START OF HACK] -----------------------------------------------------------------------------------
    // Force this component to re-render whenever Redux store changes (we'll see "correct" approach later)

    const [dummy, setDummy] = React.useState(undefined)

    React.useEffect(() => {
        console.log("In Example4 Main component, subscribing to Redux store")
        const unsubscribe = store.subscribe(() => {
            setDummy(new Date())  // Update component's dummy state, forces React to re-render component.
        })
        return () => {
            console.log("In Example4 Main component, unsubscribing from Redux store")
            unsubscribe()
        }
    }, [])

    // [END OF HACK] -------------------------------------------------------------------------------------

    return (
        <div>
            { // Wrap all child components in a "provider".
              // The provider creates and populates a "data context" and makes it available to child components.
            }
            <MyReduxStoreProvider value={store}>
                { // We don't need to pass the Redux store directly to our child components anymore.
                  // The child components will be able to retrieve this data themselves, from their context.
                }
                <ProductList />
                <AddProductForm />
            </MyReduxStoreProvider>
        </div>
    )
}
export default Main