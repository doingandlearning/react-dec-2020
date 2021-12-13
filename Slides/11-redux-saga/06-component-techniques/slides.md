---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
---

# Redux Saga

1. Redux Saga essentials
2. Redux Saga in practice
3. Defining a simple saga
4. Defining an asynchronous saga
5. Calling a REST service

---

# 1. Redux Saga Essentials

- Overview of Redux Saga
- A saga is a generator function
- Calling a generator
- Using a generator in a loop

---

# Overview of Redux Saga

Redux Saga is a library to help you run "side effects" in your React application, typically asynchronously
- E.g. call a REST service
- E.g. interact with local storage
- E.g. perform a complex calculation

Reasons for using Redux Saga to do this:
- Easier to manage, test, and handle errors

---

# A saga is a generator function

A saga is a generator function (an ES6 language feature)
- The function signature has a *
- Inside the function, use the yield keyword to yield control back to the client (optionally supplying a value)

```
function * ducklingGenerator() { 

  console.log("\nGenerating duckling #1")
  yield "Huey"

  console.log("\nGenerating duckling #2")
  yield "Luey"

  console.log("\nGenerating duckling #3")
  yield "Duey"
}
```

---

# Calling a generator

Here's some client code, which shows how to use the generator function to get a series of values:

```
console.log("Before call to ducklingGenerator")
let genObj = ducklingGenerator()
console.log("After call to ducklingGenerator")

let res1 = genObj.next()
console.log(res1)

let res2 = genObj.next()
console.log(res2)

let res3 = genObj.next()
console.log(res3)
```

---

# Using a generator in a loop

You can use a generator with a for-of loop
- Each iteration returns the next yielded value
- When the generator "returns", the loop terminates

```
for (let res of ducklingGenerator())
  console.log(res)
```

---

# 2. Redux Saga in Practice

- Overview
- Example application
- Dependencies for Redux Saga
- Additional dependencies

---

# Overview

We're now going to see how to use Redux Saga in a full React application
- What dependencies are required
- How to define a saga
- How to add saga middleware into a Redux Store
- How to use sagas in realistic scenarios

---

# Example application

Go to the demo-app folder and run `npm start`
- There are 3 examples
- Incremental complexity

---

# Dependencies for Redux Saga

To use Redux Saga, add the following dependencies in your package.json file

```json
{
  "dependencies": {
     "redux-saga": "^1.1.3",
     "@types/redux-saga": "^0.10.5",
    …
  },
  …
}
```

You can make these changes as follows:

```
npm install --save redux-saga                  [for TypeScript or JavaScript]

npm install --save "@types/redux-saga"                  [for TypeScript only]
```

---

# Additional dependencies

Note that the example application also has the following dependencies…
- React Redux (required by Redux Saga)
- React Router (just to make the example look pretty ☺)

---

# 3. Defining a Simple Saga

- Overview
- A simple saga
- Creating & running Saga middleware

---

# Overview

In this section we'll see how to define a simple saga
- The saga will just display a 1-off message in the console

In the example application, click the Example 1 link
- The example has a Redux Store
- We've added a "Saga middleware" to the Redux Store

A "Saga middleware" watches for Redux actions, and spawns saga generator functions to handle them

---

# A simple saga

Example 1 has a super-simple saga ☺
It just displays a message on the console

```
export function * helloWorldSaga() {
    console.log('Hello from helloWorldSaga in Example1!')
}
```

This isn't a realistic saga
- A realistic saga does async work and yields result(s)
- But we have to start somewhere!

---

# Creating & running Saga middleware

In your root component, create a "Saga middleware", add it to the Redux store, and run it as follows:

```
import {applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../code/sagas'

// Create a Saga middleware, will contain saga(s) that listen for actions.
const sagaMiddleware = createSagaMiddleware()

// Create the Redux Store, and connect the saga middleware to it.
const store = createStore(
    myreducer,
    {some state we want to put in the Redux Store},
    applyMiddleware(sagaMiddleware)
)

// Run our saga in the middleware. 
sagaMiddleware.run(rootSaga)
```

---

# 4. Defining an Async Saga

- Overview
- An async worker saga
- Triggering a worker saga
- Combining sagas into a root saga
- Running the root saga

---

# Overview

In this section we'll see how to define an async saga
- The saga will delay for a while, then return a value
- We'll make use of a Promise to achieve this

In the example application, click the Example 2 link
- Click Increment async
- Increments counter 3 times, with delays

---

# An async worker saga (1 of 3)

Here's our asynchronous "worker" saga
- Spawned by Saga middleware (we'll explain how shortly)
- It yields value(s) back to the Saga middleware

```
import {put} from 'redux-saga/effects'
…
const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function * incrementAsync() {
    yield delay(1000)
    yield put({ type: ActionType.INCREMENT_COUNTER })

    yield delay(1000)
    yield put({ type: ActionType.INCREMENT_COUNTER })

    yield delay(1000)
    yield put({ type: ActionType.INCREMENT_COUNTER })
}
```

---

# An async worker saga (2 of 3)

Consider the first yield statement:

```
const delay = (ms: number) => new Promise(res => setTimeout(res, ms))
…

function * incrementAsync() {
    yield delay(1000)
    yield put({ type: ActionType.INCREMENT_COUNTER })
    …
```

- Calls our delay() function, which returns a Promise
- So we're yielding a Promise back to Saga middleware
- Saga middleware waits for the Promise to resolve
- Then Saga middleware resumes our saga…

---

# An async worker saga (3 of 3)

Now consider the second yield statement:

```
import {put} from 'redux-saga/effects'
…

function * incrementAsync() {
    yield delay(1000)
    yield put({ type: ActionType.INCREMENT_COUNTER })
    …
```

- Calls put(), an "effect creator function" in Redux Saga
- put() creates an effect that tells the Saga middleware to schedule the dispatch of an action to the Redux store
- In our example, the action is to increment the counter

---

# Triggering a worker saga

The incrementAsync() worker saga on the last few slides increments the counter, with some delays

What causes the worker saga to be spawned…?
- The answer is, a "watcher" saga like this:

```
function * watchIncrementAsync() {
    yield takeEvery(ActionType.INCREMENT_COUNTER_ASYNC, incrementAsync)
}
```

- Handles INCREMENT\_COUNTER\_ASYNC actions
- Spawns incrementAsync() worker saga 

---

# Combining sagas into a root saga

We have multiple "watcher" sagas in our example:
- helloWorldSaga()
- watchIncrementAsync()

We want all these watcher sagas to start at once
- To achieve this, combine the watcher sagas into a single root saga as follows:

```
export default function * rootSaga() {
    yield all([
        helloWorldSaga(),
        watchIncrementAsync()
    ])
}
```

---

# Running the root saga

We then run the root saga as follows:

```
import rootSaga from '../code/sagas'
…

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    myreducer,
    {counterValue: 0},
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)
…
```

---

# 5. Calling a REST Service

- Overview
- Key points in the saga code file
- Some interesting questions…

---

# Overview

In this section we'll use a saga to call a REST service
- This is one of the main use-cases for sagas

First, run the REST service as follows:
- In the server folder, run `npm start`

Then in the React application:
- Click Example 3, then click Get thumbnail URLs async
- Calls the REST service asynchronously via a saga

---

# Key points in the saga code file

myRestClient() 
- This is a regular function, calls the REST service
- Returns a Promise, with async result of REST service

getThumbnailUrlsAsync()
- Worker saga, calls myRestClient() and awaits result
- Yields an effect, telling Saga middleware to process data

watchGetThumbnailUrlsAsync()
- Watcher saga, spawns the above worker saga

---

# Some interesting questions…

Here are some things to think about…

- How is the worker saga connected to the UI?
- What do we do with the REST result data?
- What is the fetch() function doing?

---

# Summary

- Redux Saga essentials
- Redux Saga in practice
- Defining a simple saga
- Defining an asynchronous saga
- Calling a REST service
