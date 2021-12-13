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

# Modular Applications

1. The need for modularity
2. Example using Webpack

---

# 1. The Need for Modularity

- The problem
- The solution (Webpack)
- Installing Webpack
- What does Webpack do?

---

# The Problem

Your web applications are likely to become quite large
- 100's or 1000's of components
- Various 3rd-party JS and CSS libraries
- Lots of versions of the above

React introduces some additional considerations
- How do you transpile ES6 and JSX into ES5?

How do you manage and coordinate all of this? 

---

# The Solution - Webpack

Various toolsets have cropped up over the years, to help you manage all your files and processes
- E.g. Gulp, Grunt, Browserify

In recent years, Webpack has emerged as the preferred tool for bundling CommonJS modules
- Node.js introduced the concept of CommonJS modules
- ES6 supports CommonJS modules too
- React apps consist of a bunch of CommonJS modules

---

# Install Webpack

You can install webpack using npm as follows:

```
npm install webpack -g
```

---

# What does Webpack do?

Webpack is a module bundler
- It bundles all your source files into a single file

Benefits:
- Dramatically improves network performance
- Browser can download your app in a single HTTP request

Additional cool capabilities in Webpack:
- Code minification, uglification, hot module replacement   

---

# 2. Example using Webpack

- Overview
- Defining a package.json file 
- Installing packages
- Configuring Webpack
- App structure
- Packaging and running the app
- Another example

---

# Overview

In this section we'll take a look at a simple React app that uses Webpack, see the following folder:
- Demo1-SimpleComponents

---

# Defining package.json (1 of 4)

We're going to add three elements to our package.json: dependencies, devDependencies and scripts.

```json
{
  "name": "retailersDirectory-app",  
  "version": "1.0.0",  
  "description": "Modular app via webpack",  
  "main": "index.js",

  "dependencies": { … },
  "devDependencies": { … },
  "scripts": { … }
}
```

--- 

# Defining package.json (2 of 4)

Add react and react-dom as a dependencies

```json
"dependencies": {
   "react": "17.0.2",    
   "react-dom": "17.0.2"
}
```

---

# Defining package.json (3 of 4)

Add a whole ton of development dependencies

```json
"devDependencies": {
    "@babel/core": "7.15.0",
    "babel-loader": "8.2.2",
    "@babel/preset-env": "7.15.0",
    "@babel/preset-react": "7.14.5",
    "autoprefixer": "10.3.3",
    "css-loader": "6.2.0",
    "opener": "1.5.2",
    "postcss-loader": "6.1.1",
    "style-loader": "2.2.1",
    "concurrently": "6.2.1",
    "webpack": "5.51.1",
    "webpack-cli": "4.8.0"
}
```

--- 

# Defining package.json (4 of 4)

We define the start script
- Runs webpack to package our application
- Then concurrently runs webpack and live-server
- If we edit a source file, it will be rebundled and reloaded

```json
"scripts": {
   "start": "webpack --progress &&   
             concurrently 
             \"webpack --progress --watch\" 
             \"live-server dist\""
}
```

---

# Install Packages

To install pacakges, open a command window/terminal and run the following in your project folder:

```
npm install
```

npm downloads specified packages and dependencies (see the node\_modules) folder.

---

# Configuring Webpack

To configure how Webpack performs its packaging and bundling, see webpack.config.js
- We can package app in production or development mode 
- Application entry point is src/index.js
- Bundled output will be in dist/assets/bundle.js

Babel does a lot of cool things, via "presets"
- @babel/preset-env   -  Compiles code to ES5
- @babel/preset-react -  Compiles JSX

---

# Application Structure

dist/index.html
- Entry point for our web app as a whole
src/index.js
- Entry point for our code
src/components
- Defines our React components, e.g. one per file
data
- Contains the data for our app, loaded into app on startup

---

# Packaging and Running the Application

To package and run the app

```
npm run start
```

What happens:
- Builds and bundles the app (into the dist folder)
- Starts live-server 
- Opens a browser and loads your home page
- If you change any file, it's rebundled and reloaded

---

# Another example

We have another example, in the following folder
- Demo2-ComponentHierarchy

What's different in this example
- Uses more "interesting" data
- Contains more components

---

# Summary

- The need for modularity
- Example using Webpack
