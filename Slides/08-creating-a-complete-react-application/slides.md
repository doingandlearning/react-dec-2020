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

# Creating a Complete React App

1. Creating a complete app
2. Running the app

---

# 1. Creating a Complete App

- Overview
- Creating a React TypeScript app
- Reviewing the application
- Application home page
- Source code entry point
- Functional components

---

# Overview

We'll use TypeScript for our React demos from now on
- JavaScript demos are also available

We're going to use the Create React App tool
- Generates a template app, config, etc.
- See https://create-react-app.dev/ 

All you need installed is Node.js version 10 or above
- You can get it from https://nodejs.org/en/

---

# Creating a React TypeScript Application

You can use Create React App as follows, to create a React application using TypeScript:

```
npx create-react-app demo-app --template typescript
```

This command also downloads React libraries and dev tools into the node_modules folder
As specified in the package.json file

---

# Reviewing the Application

Look at the structure of the generated application

---

# Application Home Page

The application home page is public/index.html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React App</title>
    …
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

---

# Source code entry point

The source code entry point is src/index.tsx

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
…
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

Aside: For info about React "strict mode", see:
https://reactjs.org/docs/strict-mode.html 

---

# Functional Components

In the generated code, App is a functional component:

```js
import React from 'react';
import './App.css';
…

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        … Plus other HTML content …
      </header>
    </div>
  );
}

export default App;
```

---

# 2. Running the App

- Running the app in dev mode
- Hot reloading
- Testing the app
- Building the app for production
- Serving the production application
- Pinging the production application

---

# Running the App in Dev Mode (1 of 3)

You can run the app in dev mode as follows:

```
npm start
```

or

```
npx react-scripts start
```

What this does:
- Transpiles TS code into ES5 (as per tsconfig.json)
- Transpiles JSX/TSX files into ES5 (via Babel)
- Builds the application in memory (via Webpack)
- Starts a dev server to host the application 
- The dev server is on http://localhost:3000 

---

# Running the App in Dev Mode (2 of 3)

Look at the output from the command on the previous slide.


---

# Running the App in Dev Mode (3 of 3)

Ping the app at http://localhost:3000/

---

# Hot Reloading

Hot reloading is supported.

---

# Building the Application for Production

You can build the application for production as follows:

```
npm run build
```

or 

```
npx react-scripts build
```

This creates a build folder that contains a production build of your application
- build/static/js/    - Minified JS "chunk" files
- build/static/css/   - Minified CSS files
- build/static/media/ - Media files (e.g. images)

---

# Serving the Production Application

You can now run the application on a production server

E.g. install the Node "serve" server:

```
npm install -g serve
```

Then serve the production build of the app as follows:

```
serve -s build -l 8080
```

-s option  -  Location of app (i.e. the build folder)
-l option  -  Port to listen on (default is 5000)

---

# Pinging the Production Application 

Open a browser and navigate to the following URL:
http://localhost:8080/

---

# Summary

- Creating an app
- Running the app
