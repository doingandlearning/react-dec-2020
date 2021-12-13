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

# JSX

1. Overview of JSX
2. JSX Syntax
3. JSX gotchas

---

# 1. Overview of JSX

- The story so far…
- Introducing JSX
- Transpiling JSX

---

# The story so far...

In all the examples so far, we've created elements programmatically using React.createElement()

```js
class Retailer extends React.Component {
   render() {
      return React.createElement(… … …)
   }
}
```

```js
function Retailer(props) {
   return (
      React.createElement(… … …)
   )
}
```

---

# Introducing JSX

<v-clicks>

React supports a lightweight syntax called JSX
  - Create React elements concisely and directly
  - Use XML to specify the elements you want to create

Elements can be HTML tags or your own components

```js
const productsList = 
   <ul>
      <li>Skis</li>
      <li>Boots</li>
   </ul>
```

```js
const basket = 
   <Basket>
      <Item>Skis</Item>
      <Item>Boots</Item>
   </Basket>
```

</v-clicks>

---

# Transpiling JSX

<v-clicks>

Browsers don't understand JSX syntax
  - JSX syntax must be transpiled into "pure" React


You can use the Babel transpiler to do this
  - Add a `<script>` to download the Babel transpiler 
  - Embed JSX inside `<script type="text/babel">`

```js
<script src="…URL for Babel on unpkg.com…"></script>

<script type="text/babel">
   … Put your JSX code here …
</script>
```

</v-clicks>

---

# JSX Syntax

- JSX content
- Using JSX for components
- Simple example of JSX
- Evaluating JavaScript expressions in JSX
- Data-driven JSX
- Passing properties to a component in JSX
- Complete example

---

# JSX Content

<v-clicks>

JSX elements can contain plain text


``` js
const productsList = 
  <ul>
    <li title="swans">Swans city shirt</li>
    <li title="bloobs">Cardiff City shirt</li>
  </ul>
```

JSX elements can contain JS expressions in {} braces

```js
const data = ["Swansea City shirt", "Cardiff City shirt"]

const summaryElem = 
  <div>There are {data.length} items</div>
```

</v-clicks>

---

# Using JSX for Components

```js {all|15|all}
function ItemsList() {
   return (
      <div>
         <h1>JSX Example 1</h1>
         <ul>
            <li>Swansea shirt</li>
            <li>Cardiff shirt</li>
            <li>Lamborghini</li>
         </ul>
      </div>
   )
}

ReactDOM.render( 
   <ItemsList/>, 
   document.getElementById('root') 
)
```

---

# Evaluating JavaScript Expressions in JSX

```js {all|2|11|all}
function ItemsList() {
   const timestamp = new Date().toLocaleTimeString()
   return (
      <div>
         <h1>JSX Example 2</h1>
         <ul>
            <li>Swansea shirt</li>
            <li>Cardiff shirt</li>
            <li>Lamborghini</li>
         </ul>
         <small>Page generated at {timestamp}</small>               
      </div>
   )
}

ReactDOM.render( <ItemsList/>, document.getElementById('root') )
```

---

# Data-Driven JSX

```js {all|1|4|9|12|all}
const data = ["Swansea shirt", … … … ]

function ItemsList() {
   const timestamp = new Date().toLocaleTimeString()
   return (
      <div>
         <h1>JSX Example 3</h1>
         <ul>
            { data.map((item, i) => <li key={i}>{item}</li>) }
         </ul>
         <hr/>
         <small>Page generated at {timestamp}</small>               
      </div>
   )
}

ReactDOM.render( <ItemsList/>, document.getElementById('root') )
```

---

# Passing Properties to a Component in JSX

```js {all|1|15-18|16|4|17|6|18|9|all}
function ItemsList(props) {
   return (
      <div>
         <h1>{props.heading}</h1>
         <ul>
            {props.items.map((item, i) => <li key={i}>{item}</li>)}
         </ul>
         <hr/>
         <small>Page generated at {props.timestamp}</small>
      </div>
   )
}

ReactDOM.render(
    <ItemsList 
        heading={'JSX Example 4'} 
        items={data} 
        timestamp={new Date().toLocaleTimeString()} />,    
    document.getElementById('root')
)
```

---

# Complete Example

See complete example in exercise5.html

---

# 3. JSX Gotchas

<v-clicks>

JSX is case-sensitive

```js
const badElem1 = <SpotTheBug>oops</SpotTheBUG>
```

JSX tags must be closed

```js
const badElem2 = <input type="text">
```

Adjacent JSX elements must be wrapped inside an enclosing tag

```js
const badElem3 = 
   <h1>Greetings</h1>
   <div>This won't work. Sorry!</div>
```

To assign a CSS class, use className (not class)
```js
const badElem4 = 
   <div class="emphasis">Won't work!</div>
```

</v-clicks>

---

# Summary

- Overview of JSX
- JSX syntax
- JSX gotchas





