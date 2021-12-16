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

# Server-Side Rendering

- Overview of SSR
- Example application

---

# 1. Overview of SSR

- A reminder about SEO
- The problems of React and SEO
- The solution to the problem

---

# A reminder about SEO

<v-clicks>

According to Wiki:

Search engine optimization (SEO) is the process of affecting the visibility of a website or a web page in a web search engine's unpaid results. 

In general, the earlier (or higher ranked on the search results page), and more frequently a site appears in the search results list, the more visitors it will receive from the search engine's users; these visitors can then be converted into customers.

</v-clicks>

---

# The problems of React and SEO

<v-clicks>
React apps are not search engine friendly... 

If you view the page source for index.html in a regular React app, it just shows the <div> element:

```ts
<div id="root"></div>
```

React replaces this placeholder with your content, but…

There's no hook to tell search engine robots about this

So search engines never get to see the final page content

So they can't crawl your page and index your content!

</v-clicks>

---

# The solution to the problem

<v-clicks>

To solve the problem on the previous slide…

React apps must be rendered (to HTML) on the server

So by the time it gets to the browser, it's "normal" HTML

So search engines can crawl into the real content

This is "server-side rendering" (SSR)

We'll show a simple SSR solution to give you an idea of the principles involved

</v-clicks>

---

# 2. Example Application

- Overview
- Provisioning a web server
- Facilitating server-side transpilation
- Implementing a server app 
- Hydrating the SSR app at the client 
- Building the application
- Running the application
---

# Overview

<v-clicks>

For the purposes of demonstration, we've created a simple demo app using "Create React App"

See demo-app folder, you can run at client as normal:

```js
npm start
```

What do you see when you "view source" in the browser?

</v-clicks>

---
# Provisioning a web server

<v-clicks>
Let's now think about how we can render the app at the server, using SSR

The first step is to provision a web server

We'll use Node.js and Express

You can install as follows:

```js
npm install express
```

</v-clicks>

---
# Facilitating server-side transpilation

<v-clicks>
Shortly we'll see how to implement a Node.js server app, to render our React code at the server

The Node.js app will use the "React server" API to do this

Unfortunately, Node.js doesn't understand JSX or ES6…

So we'll need to install Babel at the server, to transpile JSX and ES6 into regular JS

```
npm install --save @babel/register @babel/preset-env @babel/preset-react
npm install --save ignore-styles
```
</v-clicks>

---
# Implementing a server app 

<v-clicks>
Now we're ready to implement a Node.js server app

Listens for incoming requests for our React app

Serves-up build/index.html

We've created a server sub-folder

index.js is server entry point

server.js holds HTTP logic

Take a look at server/index.js
Pulls in the Babel transpiler at the server
This is necessary, transpiles server-side React code to JS

```js
require('ignore-styles')

require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react']
})

require('./server')
```

Now take a look at server/server.js
Listens on port 8080, serves up build/index.html

Notice the following key statement
Uses the React-DOM server API to render our <App/> component as a string at the server - this is SSR!

```js
data.replace(
  '<div id="root"></div>',
  `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
)
…
```
</v-clicks>

---
# Hydrating the SSR app at the client 

<v-clicks>
The final step is to tweak the React app source code in src/index.js

Change this: `ReactDOM.render(…);`

To this: `ReactDOM.hydrate(…);`

Explanation: The client doesn't need to "render" the app component (it's already been rendered at server)
The client just has to "re-hydrate" it 
</v-clicks>

---
# Building the application

<v-clicks>
We're now ready to build the React app

This creates an optimized production build
See the build folder

Take a look at build/index.html
This is the home page of the app
This is what the Node.js app will serve up
</v-clicks>

---

# Running the application

<v-clicks>
Run the Node.js server app as follows:


Now browse to http://localhost:8080
Returns the SSR React app
Try View Page Source now
</v-clicks>

---

# Summary

Overview of SSR
Example application