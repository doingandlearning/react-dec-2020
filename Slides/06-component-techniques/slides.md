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

# Component Techniques

- Lifecycle methods
- Effect hooks

## Annexes
- Memoization
- REST services

---

# Lifecycle Methods

- Overview
- Lifecycle methods available
- Implementing lifecycle methods
- Optimizing UI updates
- Is an update necessary?
- Accessing previous state

---

# Overview

Roadmap for this chapter…
  - This section 	- lifecycle methods (class components)
  - Next section	- effect hooks  (functional components)

For a class component, React calls these methods:
  - Constructor
  - Lifecycle methods
  - render()


---

# Lifecycle Methods Available

Here are the most common lifecycle methods that React calls upon a class component
  - componentDidMount()
  - componentDidUpdate()
  - componentWillUnmount()

For a full list of lifecycle methods, see:
  - https://reactjs.org/docs/react-component.html

---

# Implementing Lifecycle Methods

See the example in lifecycleMethods1.html
  - Displays info messages in the console

---

# Optimizing UI Updates

Let's think about how we can optimize UI updates, to reduce the amount of re-rendering
  - At the moment, when the user clicks a thumbnail icon, it renders that icon in large format on the page
  - It does this even if you click the same thumbnail several times - what a waste of effort!

A better approach:
  - Only re-render if a different thumbnail is clicked

---

# Is an Update Necessary?

Implement shouldComponentUpdate() method
  - The method receives the provisional new properties and state for the component

The function must return a boolean result
  - true if you want an update/render to happen
  - false if you decide there's no need to update/render

Example - see lifecycleMethods2.html

---

# Accessing Previous State

Implement the componentDidUpdate() method
  - The method receives the previous properties and state for the component

What to do with this info?
  - E.g. stick it into some kind of "undo" store
  - E.g. log the change somewhere useful

Example - see lifecycleMethods3.html

---

# 2. Effect Hooks

- Overview
- Defining a simple effect hook
- Effects with cleanup
- Effect dependencies

---

# Overview

The previous section discussed lifecycle methods for class components

This section discusses effect hooks for functional components 
  - Introduced in React 16.8
  - Similar to lifecycle methods (but not exactly the same)

---

# Defining a Simple Effect Hook (1 of 2)

To define an effect hook for a functional component:
  - Call React.useEffect()

```js
React.useEffect(() => { side-effect code… })
```

React invokes your effect(s) after each render, including after the first render
  - An effect is a combination of componentDidMount() and componentDidUpdate()
  - Gives you an opportunity to perform side-effect work

---

# Defining a Simple Effect Hook (2 of 2)

Example - see effectHooks1.html

Note 1: You can define multiple effect hooks, which is good for separation of concerns
  - Effect hooks are invoked in the order defined

Note 2: React only schedules a re-render of a functional component if the state has changed
  - So no need for shouldComponentUpdate()

---

# Effects with Cleanup (1 of 2)

Some effects might require cleanup
  - E.g. cancel a timer/interval
  - E.g. cancel a subscription to an external data source

To provide cleanup behaviour for an effect:
  - Return a function from the effect

```js
React.useEffect(() => { 
    side-effect code…
    return () => { cleanup code… }
})
```

---

# Effects with Cleanup (2 of 2)

Example - see effectHooks2.html

React invokes an effect cleanup function as follows:
  - Before the component re-renders itself
  - Just before the component unmounts itself

This is different to componentWillUnmount()
  - componentWillUnmount() is called only when the component unmounts, not before every re-render

---

# Effect Dependencies (1 of 2)

React.useEffect() takes an optional 2nd arg
  - An array of dependencies
  - Effect will only be invoked if a dependency has changed 

```js
React.useEffect(() => { 
    side-effect code…
    return () => { cleanup code… }
}, [dependency1, dependency2, … ] )
```

---

# Effect Dependencies (2 of 2)

Example - see effectHooks3.html

Gallery has 4 effects, illustrating different scenarios:
  - Effect 1 - Called on every re-render 
  - Effect 2 - Called on every thumbnail click
  - Effect 3 - Called on a different thumbnail click
  - Effect 4 - Called on initial render, cleaned up on unmount

---

# Summary

- Lifecycle methods
- Effect hooks

---

# Annex: Memoization

- Overview
- Simple memoization
- Default memoization behaviour
- Custom comparison function
- Memoizing child content

---

# Overview

Memoization is a render optimization technique…
  - Introduced in React 16.6
  - The ability to cache virtual DOM tree content

Memoization is relevant if you have a pure component
  - i.e. a component that always generates the same virtual DOM tree for a given set of input properties
  - React caches the virtual DOM tree when the component is first rendered, then reuses the cached content later

---

# Simple Memoization (1 of 2)

To memoize a component:
Wrap it in a call to React.memo()

You can do it in 2 steps:

```js
function SomeComponent() {…}

const MemoizedComponent = React.memo( SomeComponent )
```

Or you can do it in 1 step:

```js
const MemoizedComponent = React.memo( () => {…} )
```

---

# Simple Memoization (2 of 2)

Example - see memoization1.html

App component has 2 interesting child components:
  - A normal Panel component
  - A memoized Panel component 

Type in the textbox, to update the text state
  - Causes the App component (and children) to re-render
  - But the memoized Panel component isn't re-rendered

---

# Default Memoization Behaviour (1 of 2)

Imagine you have a memoized component…
  - ... and React might need to render the component
  - … e.g. because state has changed in a parent component

React does a shallow comparison of the component's current properties vs. previous properties
  - If all the properties are the same, cached content is used
  - If any property is different, component is re-rendered

---

# Default Memoization Behaviour (2 of 2)

Example - see memoization2.html

The Panel component has 2 properties:
  - title - this is invariant
  - text  - this is the text from the text box

Note the memoized version of the Panel component is now re-rendered on every keystroke
  - The text property is different, so no caching occurs!

---

# Custom Comparison Function (1 of 2)

You can pass a comparison func into React.memo()
  - The function takes previous and next properties
  - If function returns true, cached content will be used

```js
function func(prevProps, nextProps){ …return true/false… }

const MemoizedComponent = React.memo(SomeComponent, func)
```

Some reasons for defining a comparison function:
  - To compare only a subset of the properties
  - To do deep property comparisons (e.g. nested objects)
  - To use some global state in the comparisons

---

# Caching Child Content (1 of 2)

We've seen how to use React.memo() to cache the entire virtual DOM tree for a component

You can also cache a particular piece of child content within a component, using React.useMemo()

```js
const cachedContent = React.useMemo(content, [dependencies])
```

React will cache the specified content 
  - If any dependency changes, React recomputes the cache

---

# Caching Child Content (2 of 2)

Example - see memoization4.html

  - The Panel component displays the date/time when the panel was initially displayed
  - This content is cached via React.useMemo()

Note the dependency array is empty 
  - So there's nothing in here that can change
  - So there's nothing to inhibit caching here ☺

---

# Annex: REST Services

- Overview
- Starting the REST service
- Testing the REST service
- Calling the REST service

---

# Overview

In this section we show a realistic example of why you’d implement an effect hook or a lifecycle method

The example will call a REST service at the point when a component is first rendered
  - The component calls the REST service asynchronously
  - When the REST service returns with the data, the component will re-render itself with the result data

---

# Starting the REST Service

We’ve implemented the REST service in Node.js
  - Open a command window in the server folder
  - Run the following commands

```bash
npm install
npm start
```

The REST service starts up on port 3000

---

# Testing the REST Service

To test the REST service is working, browse here:
- http://localhost:3000/api/thumbnailUrls

---

# Calling the REST Service

Now see restClient.html

After the Gallery component is first rendered:
  - Our effect hook makes an asynchronous REST call 
  - When the REST call returns, we update component state
  - This causes the Gallery component to re-render

The example also shows how to use:
  - fetch(), async, await
