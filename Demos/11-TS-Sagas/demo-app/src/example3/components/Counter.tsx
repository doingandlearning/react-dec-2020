import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, incrementAsync, getThumbnailUrlsAsync} from '../code/actions'

function Counter() {

    const {counterValue, thumbnailUrls} : any = useSelector(store => store)
    const dispatch : any = useDispatch()

    return (
        <div>
            <h1>Sagas [Example 3]</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementAsync())}>Increment async</button>
            <button onClick={() => dispatch(getThumbnailUrlsAsync())}>Get thumbnail URLs async</button>
            <div>Counter value: {counterValue}</div>
            <div>Thumbnail URLs: {thumbnailUrls}</div>
        </div>
    )
}
export default Counter
