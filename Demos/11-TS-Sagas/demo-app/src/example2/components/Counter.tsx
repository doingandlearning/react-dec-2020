import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, incrementAsync} from '../code/actions'

function Counter() {

    const {counterValue} : any = useSelector(store => store)
    const dispatch : any = useDispatch()

    return (
        <div>
            <h1>Sagas [Example 2]</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementAsync())}>Increment async</button>
            <div>Counter value: {counterValue}</div>
        </div>
    )
}
export default Counter
