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

# Creating a React Web App

1. Creating a simple app
2. Creating many elements
3. Data-driven UIs

---

# 1. Creating a Simple App

- Scenario
- Defining an HTML target element
- Including React libraries
- The virtual DOM
- Creating React elements
- Rendering React elements
- Viewing the React virtual DOM
- Logging a React element

---

# Scenario

We're going to show how to create simple React apps in pure React, using ES6++ language features.

See the Demos/02-WepApp folder
  - The first example we'll look at is `helloReact.html`
  - This is a minimalistic "Hello World" React app.

---

# Defining an HTML Target Element

A React web app has a single top-level HTML element into which React will render the UI

You typically define it like this:

``` html
<div id="root"></div>
```

- Give it a suitable id
- You'll refer to this id when you render content

---

# Including React libraries

To use React in a web page, you need 2 libraries:
  - React: Creates the views
  - ReactDOM: Renders the views in the web browser

The following code downloads these libraries directly:

``` html
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

---

# The Virual DOM

<v-clicks>

In a web app, you can manipulate elements using DOM
  - Create elements, append child element, etc.
  - Low-level, tedious and quite slow rendering

React introduces the concept of the virtual DOM
  - You create React elements (lightweight JS objects)
  - You manipulate the lightweight JS objects
  - React render the appropriate HTML very efficienty

</v-clicks>

--- 

# Creating React Elements

You can create a React element programmatically by calling `React.createElement()`:

- 1st argument specifies the type of element to create
- 2nd argument specifies the element's properities
- 3rd argument specifies the element's children

```html {all|2|3|4|5|all}
<script>
    const msg = React.createElement(
      'h1', 
      {id: 'my-msg', 'title': 'This is my message'},
      'Hello React!'
    )
  
</script>
```

---

# Rendering React Elements

Render your top-level React element into a target node on the web page, using ReactDOM.render()
  - 1st argument is your top-level React element
  - 2nd argument is the target node on the web page

``` html
<script>
...
 
    ReactDOM.render(msg, document.getElementById('root'))
    console.log(msg) 

</script>
```

---

# Viewing the React Virtual DOM

Chrome (and other browsers) allow you to view the React elements in the virtual DOM
  - Install the React developer tools extension
  - Then in DevTools, click Components and select element

---

# Logging a React element

A React element is a lightweight JS object.

---

# 2. Creating Many Elements

- Overview
- Hierarchy of React elements
- View the page in the browser
- View the virtual DOM

---

# Overview

In this section we'll see how to create a more ambitious virtual DOM tree, containing nested React elements. Then we'll render the root element to the DOM.

You only ever render the root React element to the DOM!

---

# Heirarchy of React elements

- createElement() can take a variadic list of child elements, so you can create a hierarchy of elements

```js {all|1|2|2-7|all}
const ul = React.createElement('ul', null,
      React.createElement('li', null, 'Item1'),
      React.createElement('li', null, 'Item2'),
      React.createElement('li', null, 'Item3'),
      React.createElement('li', null, 'Item4'),
      React.createElement('li', null, 'Item5'),
      React.createElement('li', null, 'Item6')
  ),
```

Have a look at `multipleElements.html` for an example.

---

# View in the Browser and in DevTools

---

# 3. Data-Driven UIs

- Overview
- Defining data
- Mapping data to elements
- Example
- View page in browser

---

# Overview

The previous section created a hard-coded hierarchy of React elements.

For a real app, you'll adopt a data-driven approach
  - The elements you create will depend on data
  - We'll see how to create a data-driven UI in this section
  - See `multipleElementsViaData.html` for an example

---

# Defining Data

We'll have an array of games and an array of cities:

```js
const games = [
  'Halo',
  'Hades',
  'Fortnite',
  ...
]
```

```js
const cities = [
  "Brighton",
  "Belfast",
  "Chicago"
  ...
]
```

---

# Mapping Data to Elements

You can use map() to map array item to React element

```js {all|2|all}
someArray.map(
  (arrayItem, index) => React.createElement(htmlElem, htmlProps, htmlContent)
)
```

map() takes a lambda parameter
  - The lambda receives 2 args - (array item, index)
  - The lambda creates and returns a React element

---

# Example

Let's map games array into an `<li>` collection:

```js {all|2|3|4|all}
let gamesList = React.createElement({
  'ul',
  null,
  games.map((game,i) => React.createElement('li', {key: i}, game))
})
```

Also, map the cities array:


```js {all|2|3|4|all}
let citiesList = React.createElement({
  'ul',
  null,
  cities.map((city,i) => React.createElement('li', {key: i}, city))
})
```


---

# Example cont'd

```js {all|1|2|3|4|5|8|all}
let details = React.createElement('div', null,
  React.createElement('h1', null, 'Games'),
  gamesList,
  React.createElement('h1', null, 'Cities'),
  citiesList
)

ReactDOM.render(details, document.getElementById('root'))
```

---

# Summary

- Creating a simple app
- Creating many elements
- Data-driven UIs
