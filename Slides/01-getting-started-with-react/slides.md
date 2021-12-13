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


# Getting Started with React

---

# What is React?

<v-clicks>

- React is a lightweight client-side library from Facebook, to help you develop large-scale web apps
  - Gives you a logical way to construct your UI
  - Simplifies state management
  - Simplifies asynchronous operations

- React allows you to create apps for:
  - Web browsers (we'll cover this)
  - iOS and Android native apps (using React Native and others)

</v-clicks>

---

# Characteristics of React

<v-clicks>

- React is a relatively small library
  - much smaller and simpler than Angular

- React is very lean and flexible - it allows you to use your own libraries to do things like:
  - Call Rest services
  - Generate CSS stylesheets
  - Etc.

</v-clicks>

---

# Tooling up

<v-clicks>

- You can use any IDE you like to develop React apps:
  - VS Code
  - JetBrains WebStorm
  - React Studio
  - Vim?

- Most browsers also include handy extensions, to help you view React elements in your web page
  - React Developer Tools for Chrome
  - React Developer Tools for Firefox

</v-clicks>

---

# React uses ECMAScript 6 or Above

React applications are written in ECMAScript 6 or above which offers many key language improvements:

<v-clicks>

- Interpolated strings
- Arrow functions (a.k.a. lambdas)
- Classes and inheritance
- Object and array destructuring
- Spread parameters
- Array mapping and filtering

</v-clicks>

---

# Managing React Packages

<v-clicks>

- React has quite a small number of libraries
  - You need to manage these in your application
  - You'll use npm/yarn/pnpm to do this

- To get started, we'll download React libraries directly from https://unpkg.com
  - This is the CDN site for Node Package Manager libraries

- Later, we'll see how to use webpack to do it "properly".

</v-clicks>

---

# Summary

- What is React?
- Characteristics of React
- Tooling up
- React uses ES6 or above
- Managing React packages


