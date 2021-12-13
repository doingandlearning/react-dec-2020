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

# Properties and State

1. Types for properties
2. Working with properties
3. State management

---

# 1. Types for Properties

- Problem statement
- Solution - React property types
- How to specify property types

---

# Problem Statement

JavaScript is a dynamically typed language
  - There's no "compiler" to check that you've assigned the correct type of value to a variable
  - The first you know about a type problem is when the app crashes!

This is unsatisfactory
  - It makes your code potentially untrustworthy
  - It puts a lot more pressure on your rigour during testing

---

# The Solution - React Property Types

React allows you to specify the type for properties
  - React.PropTypes.number
  - React.PropTypes.string
  - React.PropTypes.bool
  - React.PropTypes.array
  - React.PropTypes.object
  - React.PropTypes.func

To use these type flag, include the following script file:

```js
https://unpkg.com/prop-types/prop-types.js
```

---

# How to Specify Property Types

When you define a component, specify the types for all its properties
  - How to do this depends on how you define the component (class or functional component) 

You can specify if a property is required/optional
  - You can also specify default values for the optional ones

We'll investigate all these techniques in this chapter

---

# 2. Working with Properties

- Properties in a class component
- Specifying property types
- Required props and defaults
- Defining a custom validator
- Properties in a functional comp

---

# Properties in a Class Component

In your class, define a static propTypes field
  - Specify name and type for the component's properties

```js
class Person extends React.Component {

   static propTypes = {
      name:    PropTypes.string,
      age:     PropTypes.number,
      isWelsh: PropTypes.bool,
      skills:  PropTypes.array
   }
   …
```

---

# Specifying Required Props and Defaults

You can specify if a property is required
  - If a property is optional, you can specify a default value

```js
class Person extends React.Component {

   static propTypes = {
      name:    PropTypes.string.isRequired,
      age:     PropTypes.number.isRequired,
      isWelsh: PropTypes.bool,
      skills:  PropTypes.array
   }

   static defaultProps = {
      isWelsh: false,
      skills: []
   }
   …
```

---

# Defining a Custom Validator (1 of 2)

You can define a custom validator for a property
  - E.g. a regular expression pattern for postal codes
  - E.g. the allowed range of values for a number
  - E.g. the maximum number of elements in an array

See example on next slide…

---

# Defining a Custom Validator (2 of 2)

```js
const isValidAge = (props, propName) => {
   if (typeof props[propName] !== 'number')
      throw new Error('Must be a number')
   if (props[propName] > 120)
  	throw new Error('Max value is 120')
}

class Person extends React.Component {

   static propTypes = {
      name:    PropTypes.string.isRequired,
      age:     isValidAge,
      isWelsh: PropTypes.bool,
      skills:  PropTypes.array
   }
   … 
}
```

---

# Properties in a Functional Component

You can also use properties in a functional component
  - See propertyTypes4.html

To define property types:
  - Define a static propTypes field and specify prop types
  - For required properties, append isRequired
  - For optional properties, specify default in function sig

To define a custom validator, it's the same as for classes

---

# 3. State Management

- Recap component properties
- Fixed vs. mutable state
- State in a class component
- State in a functional component
- Complete examples

---

# Recap Component Properties

We've seen how to pass properties into a component

```js
class Person extends React.Component {

   render() {
      const {name,age,isWelsh,skills} = this.props
      return ( … some elements … )
   }
}
```

```js
<Person name="John Evans"
        age={21}
        isWelsh={true}
        skills={[…]} />
```

(Ditto for functional components)

---

# Fixed Properties vs. Mutable State

Properties are immutable
  - You can't change their values

What if the component needs to hold mutable state?
  - E.g. add items to an array, update a timestamp, etc.

You can achieve mutable state in a component
  - See following slides for details
  - (Different techniques for class vs functional components)

---

# State in a Class Component

In a class component…
  - Mutable state is available via this.state

How it works:
  - To init state (e.g. in constructor), set this.state
  - To access state, use this.state
  - To modify state, call this.setState(state)

Example: stateSimple1.html

---

# State in a Functional Component

In a functional component…
  - Mutable state is available via a "state hook"

How it works:
  - To init state, call React.useState(initState), which returns [stateVariable,updateFunc]
  - To access state, use stateVariable
  - To modify state, call updateFunc(newState)

Example:  stateSimple2.html

---

# Complete Examples

For complete examples of state management, see:
  - stateComplete1.html (class components)
  - stateComplete2.html (functional components)

---

# Summary

- Types for properties
- Working with properties
- State management
