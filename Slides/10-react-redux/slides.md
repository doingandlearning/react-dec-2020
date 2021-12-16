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

# React Redux

1. Redux essentials
2. Redux and React in practice

---

# 1. Redux Essentials

- Overview of Redux 
- Identifying state 
- Defining actions
- Defining reducers
- Creating a Redux store
- Dispatching actions to a Redux store
- Subscribing to store changes
- Defining action creators
- Aside: Composing functions

---

# Overview of Redux 

<v-clicks>

Redux helps you manage state in an application

Redux has a store
- Holds all the state for your application
- The state is immutable (can't change, can be replaced)

Redux has action objects
- Specify a change you want to make to the state

Redux has reducer functions
- Receives current state and action, returns updated state

</v-clicks>

---

# Identifying state 

<v-clicks>

When you build a Redux app, the first thing you should do is to think about state
- What data will your app be manipulating and displaying?

A good approach is to try to write down a JSON object that contains all the state in a single object
- Remember, Redux stores all the state in a single object

Let's think about state for a product management app 
- See identifyingState.json 

</v-clicks>

---

# Defining actions

<v-clicks>

The next step is to think about what actions can happen in the system, which cause state to be updated
- i.e. what do you want the application to actually do?

Our product management app needs these actions:
- Add/remove/like a product
- Specify the sort order for products

Think what data you need to perform each action
- See actions.html

</v-clicks>

---

# Defining reducers

<v-clicks>

Actions are "carried out" by reducer functions

In our system, we define 3 reducer functions:
- See reducers1\_product.html
- See reducers2\_products.html
- See reducers3\_sort.html

Each reducer function:
- Receives some state (e.g. product), plus an action param
- Returns new state (e.g. updated product)

</v-clicks>

---

# Creating a Redux store

<v-clicks>

The next step is to create the Redux store
- You do this via Redux.createStore(…)

Pass 2 parameters: 
- A combination of the top-level reducers in your app
- The initial state for the Redux store (e.g. via a REST call)

Example:
- See store1\_createStore.html

</v-clicks>

---

# Dispatching actions to a Redux store

<v-clicks>

When something happens in your app, dispatch an action to the Redux store to update the app's state:
- Create an action object with info about what's happened
- Call dispatch() on Redux store, pass action as param
- Redux receives the action and sends it to the appropriate reducer function to effect the change

Example:
- See store2\_dispatchingActions.html

</v-clicks>

---

# Subscribing to store changes

<v-clicks>

You can subscribe to state-changes in the Redux store
- You specify a call-back function, which Redux will call whenever any state in the store changes

Why is this useful?
- Logging
- Forcing the application to re-render itself (see later)

Example:
- See store3\_subscribingStoreChanges.html

</v-clicks>

---

# Defining action creators

<v-clicks>

When you start implementing your React code, you'll create action objects to trigger state updates
- E.g. when the user clicks the "Add Product" button, you'll create an "Add Product" action object

It’s important you create these action objects correctly
- To achieve consistency, define action creator functions, which return a correctly structured action object

Example:
- See actionCreators.html

</v-clicks>

---

# Aside: Composing functions

<v-clicks>

This is an optional (but nice) technique…
- You can compose several functions together into a single function via Redux.compose()
- This can help you perform a task comprising many steps

Example:
- See composingFunctions.html

</v-clicks>

---

# 2. Redux+React in Practice

- Recap of Redux Store concepts
- Using Redux in a full application
- Example application
- Dependencies for React Redux
- Ex 1 - Adding state to the store
- Ex 2 - Dispatching actions
- Ex 3 - "Add product" form
- Ex 4 - Accessing the store via context
- Ex 5 - React Redux provider

---

# Recap of Redux Store concepts

<v-clicks>

Here's a recap of what we've seen so far with Redux...
- Actions (objects that describe a desired change)
- Reducers (functions that return new state)
- Creating a Redux Store
- Dispatching actions to Redux Store, e.g. due to UI events
- Subscribing to Redux Store changes

</v-clicks>

---

# Using Redux in a full application

<v-clicks>

We're now going to see how to use Redux in a full React application
- How to organize your code
- How to handle UI events, to dispatch actions to Redux 
- How to update the UI when reducers return new state
- How to use TypeScript effectively

We'll also introduce the React Redux library
- Connects a Redux Store to your React components

</v-clicks>

---

# Example application

<v-clicks>

Go to the demo-app folder and run
- There are 5 examples
- Incremental complexity

</v-clicks>

---

# Dependencies for React Redux

<v-clicks>

To use React Redux, add the following dependencies in your package.json file

```json
{
  "dependencies": {
    "react-redux": "^7.2.4",
     "@types/react-redux": "^7.1.18",
    …
  },
  …
}
```

You can make these changes as follows:

```bash
npm install --save react-redux                 # [for TypeScript or JavaScript]
npm install --save @types/react-redux          #         [for TypeScript only]
```

</v-clicks>

---

# Ex 1 - Adding state to the store

Defines initial state
- See data/initialState.json

Defines actions and reducers, similar to prev section
- See src/types and src/code

Creates and uses dedicated Redux Store
- Redux Store creation:	src/components/Main.tsx 
- Redux Store usage:	src/components/\*

---

# Ex 2 - Dispatching actions

Users can now "like" or "remove" a product

See the ProductList component:
- Passes onLike/onRemove functions into a product, which dispatch appropriate actions to the Redux store

Now see the Product component:
- Renders "Like" and "Product" buttons
- When clicked, invoke the onLike/onRemove functions

Also see the Main component, forces React to render

---

# Ex 3 - "Add product" form

Users can now add a new product
- See src/components/AddProductForm.tsx 

The AddProductForm component:
- Defines a UI form, for the user to enter product details
- When the user clicks "Add Product", it dispatches an appropriate action to the Redux store

Also see the Main component
- Renders an AddProductForm

---

# Ex 4 - Accessing the store via context

All the examples so far have passed the Redux store down to all components that need it
- So components can access state and dispatch actions

Passing the Redux store down a component chain is error-prone for deep component hierarchies

Alternative approach:
- Main component puts Redux store into the "context"
- Child components can access Redux store in the context

---

# Ex 5 - React Redux provider

React Redux is an optional library that makes it easier to connect your components to the Redux store
- Makes the Redux Store available to your components
- Ensures React re-renders components if Store changes

See detailed comments in the following files:
- src/components/Main.tsx 
- src/components/ProductList.tsx 
- src/components/AddProductForm.tsx

---

# Summary

- Redux essentials
- Redux and React in practice
