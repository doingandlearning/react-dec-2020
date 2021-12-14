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

# SPAs with React Router

- Overview of React SPAs
- Simple routing
- Router techniques
- Defining links
- Link techniques

---

# 1. Overview of React SPAs

- React and SPAs
- Dependencies for React Router

---

# React and SPAs

React has excellent support for implementing SPAs
- Define an App component that always remains resident
- Define multiple sub-components, which can be swapped in and out of the App component

Each sub-component maps to a logical URL
- This is called "routing"
- To display a different sub-component in the browser, simply navigate to the URL for that sub-component

---

# Dependencies for React Router

To implement routing in React, add the following dependencies in your package.json file

```json
{
  "dependencies": {
     "react-router-dom": "^5.2.0",
     "@types/react-router-dom": "^5.1.8",
    …
  },
  …
}
```

You can make these changes as follows

```
npm install --save react-router-dom            [for TypeScript or JavaScript]

npm install --save @types/react-router-dom              [for TypeScript only]
```

---

# 2. Simple Routing

- Example application
- Creating a router component
- Defining a route table
- BrowserRouter vs. HashRouter

---

# Example application

We've implemented a simple example application to illustrate the key features in React routing
- Go to the demo-app-1 folder and run

Navigate to the following URLs:
- http://localhost:3000/
- http://localhost:3000/products
- http://localhost:3000/about 
- http://localhost:3000/contact

---

# Creating a Router Component (1 of 2)

To enable routing in a React application, you must create a "router" component
- Detects URL changes
- Activates the appropriate component, for current URL

In a web app, react-router-dom provides two different types of router:
- <BrowserRouter> and <HashRouter>
- We'll discuss the differences shortly

---

# Creating a Router Component (2 of 2)

To use a router, render a "router" component at the root of your element hierarchy
Typically, you wrap your <App> root element in a router:

```
import { BrowserRouter } from "react-router-dom";
…

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

---
layout: two-cols
---

# Defining a Route Table

Define a route table via <Switch> and <Route>

Notes:
- Each route maps a relative path to a component
- Routes are searched from top to bottom
- Paths are partially matched from start

So you must arrange your routes from specific to general


::right::

```
import { Switch, Route } from 'react-router-dom';
…
function App() {
  return (
    <div>
      <Switch>
        <Route path="/products">
          <Products />
        </Route>
        …
        <Route path="/" >
          <Home />
        </Route>        
      </Switch>
    </div>
  );
}
export default App;
```

---

# <BrowserRouter> vs. <HashRouter>

<BrowserRouter> is preferred in production
- Uses regular URLs, e.g. example.com/products
- Supports HTML5 browser history
- Requires server config (serve home page for all requests)

<HashRouter> can be useful during development
- Uses # in URLs, e.g. example.com/#/products
- Doesn't require server config 

---

# 3. Router Techniques

- Example application
- Providing a splash screen
- Recap path matching in prev demo
- Exact path matching
- Redirecting paths
- Handling 404 errors

---

# Example Application

Go to the demo-app-2 folder and run

```
npm start
```

Navigate to the following URLs:
- http://localhost:3000/
- http://localhost:3000/products
- http://localhost:3000/catalog 
- http://localhost:3000/about 
- http://localhost:3000/contact 

---

# Providing a Splash Screen

Our Home component provides a splash screen
- Note how we import the image file 
- Enables us to refer to the image file in our code

```
import React from "react";
import './Home.css'
import splash from './swanseamarina.jpg';   

function Home() {
  return (
    <div className="container">
      <img src={splash}/>
      <div className="centered">Router techniques</div>
    </div>
  )
}
export default Home;
```

---

# Recap Path Matching in Previous Demo

In the previous demo we defined our route table like so

```
<Switch>
  <Route path="/products">
    <Products />
  </Route>
  …
  <Route path="/">
    <Home />
  </Route>
</Switch>
```

As we pointed out, React Router matches paths by saying "does the path start with this"
- So you have to put specific paths before general paths

---

# Exact Path Matching

A better approach is to specify exact paths as follows:

```
<Switch>
  <Route exact path="/">
    <Home />
  </Route>
  …
  <Route path="/contact">
    <Contact />
  </Route>
</Switch>
```

This means you can define your route table entries in any order you like ☺

---

# Redirecting Paths

You can redirect paths to different paths - like an alias

```
<Switch>
  <Route path="/catalog">
    <Redirect to="/products" />
  </Route>
  <Route path="/products">
    <Products />
  </Route>
  …
</Switch>
```

---

# Handling 404 Errors (1 of 2)

You can handle 404 errors as follows:

```
<Switch>
  …
  <Route path="*">
    <PageNotFound />
  </Route>
</Switch>
```

See the PageNotFound component on next slide

---

# Handling 404 Errors (2 of 2)

Here's the PageNotFound component
We use the global variable window.location to get the URL requested by the user

```
import React from "react";
import './PageNotFound.css'

function PageNotFound() {
  return (
    <div className="pagenotfound">
      <h1>OOPS 404</h1>
      <p>Invalid URL: {window.location.pathname}</p>
      <p>Full URL: {window.location.href}</p>
    </div>
  )
}
export default PageNotFound;
```

---

# 4. Defining Links

- Example application
- How to display a link
- How to style links
- Link vs. NavLink

---

# Example Application

Go to the demo-app-3 folder and run
- Note we've defined a menu bar of links
- Try out each link ☺

---

# How to Display a Link

To define a link, use <Link> as shown below
- (Also see App.tsx, where we render the menu)

```
import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <nav>
      <Link to="/">Home</Link>&nbsp;|&nbsp;
      <Link to="/products">Products</Link>&nbsp;|&nbsp;
      <Link to="/contact">Contact</Link>&nbsp;|&nbsp;
      <Link to="/about">About</Link>
    </nav>
  )
}
export default Menu;
```

---

# How to Style Links

When you define a `<Link to="xxx">` element…
- React renders it as an `<a href="xxx">`
- So you can define CSS styles like this:

```
nav a {
    background-color: #1199ff;
    color: white;
    text-decoration: none;
    padding: 5px;
}

nav a:hover {
    color: #1199ff;
    background-color: white;
    text-decoration: none;
}
```

---

# Link vs. NavLink

As well as <Link>, React also provides <NavLink>
- <NavLink> is similar to <Link>, except…
- <NavLink> applies active CSS style to current link 

For an example of how to use <NavLink>:
- See MenuWithNavLinks.tsx

For an example of how to style the active link:
- See Menu.css

---

# 5. Link Techniques

- Overview
- Example application
- Defining a data model
- Defining parameterized routes
- Rendering parameterized links
- Obtaining path parameters
- Defining nested routes

---

# Overview

In this section we'll see various additional techniques pertaining to links

We'll introduce a "products" data model, and use it to describe the following techniques:
- Defining parameterized routes
- Rendering parameterized links
- Obtaining path parameters from a parameterized route
- Defining nested routes

---

# Example Application

Go to the demo-app-4 folder and run `npm start`
- Click the Products link, to display all products
- Click a link to see the details for one product

---

# Defining a data model

To understand the example application, the first stop is to consider the data model

Take a look at the following TypeScript class files:
- ProductItem.ts  - Represents a simple product
- ProductStore.ts - A simple product store

---

# Defining Parameterized Routes

Here's part of the route table
- /products     - Display all products
- /products/:id - Display product with specified id

```
<Switch>

  <Route path="/products">
    <Products />
  </Route>

  <Route path="/product/:id">
    <Product />
  </Route>
  …
 </div>
```

---

# Rendering Parameterized Links

Products.tsx renders parameterized links like so:

```
function Products() {
  let products = ProductCatalog.getAllProductItems()
  return (
    <React.Fragment>
      <div className="content">
        <h1>Products</h1>
        <ul>
          {products.map((product, i) =>
            <li key={i}>
              <Link to={`product/${product.id}`}>{product.description}</Link>
            </li>
          )}
        </ul>
      </div>
    </React.Fragment>
  )
}
export default Products;
```

---

# Obtaining Path Parameters

Product.tsx obtains path parameters like so:

```
function Product() {
  let {id}: any = useParams();
  let prod: ProductItem | undefined = ProductCatalog.getProductItemById(id)

  if (!prod) {
    …
  }
  else {
    return (
      <div className="content">
        <h1>Product details</h1>
        <div>Description: {productItem.description}</div>    
        …
      </div>
    )
  }
}
export default Product;
```

---

# Defining Nested Routes

You can define nested routes
- i.e. a page can define its own internal route table

This enables you to create master/detail pages…
- Click the Products master detail link on the menu
- Renders a "master" page of all products
- Click a product, renders the selected product below

See ProductsMasterDetail.tsx  

---

# Summary

- Overview of React SPAs
- Simple routing
- Router techniques
- Defining links
- Link techniques
