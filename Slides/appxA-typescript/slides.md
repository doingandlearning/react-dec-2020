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

# TypeScript Essentials

- Getting started with TypeScript
- Functions
- Classes
- Inheritance and interfaces

---

# Getting started with TypeScript

- Overview
- Using the TypeScript Playground
- Defining types in declarations
- TypeScript basic types
- Arrays
- Tuples
- Enums

---

# Overview

<v-clicks>

You can use TypeScript to enhance the type-safety of your React applications

TypeScript supports ES6++ features, plus…

Data typing ☺

Interfaces

Decorators (similar to annotations in Java)

Class member variables (i.e. fields)

Generics

Keywords public, private, protected

</v-clicks>

---

# Using the TypeScript Playground

<v-clicks>

There's a handy TypeScript transpiler available online, where you can practice your TypeScript skills
http://www.typescriptlang.org/play/ 

Choose ES5 as the target language, via the menu TS Config | Target | ES5

Then try out some TS!

</v-clicks>

---

# Defining types in declarations

<v-clicks>

TS allows you to define types in declarations

Variables, parameters, and function return types

Use the syntax variableName:type 

```ts
let name1 = 'Fred';
let name2: string = 'Wilma';
```

transpiles to 

```js
var name1 = 'Fred';
var name2 = 'Wilma';
```

</v-clicks>

---

# TypeScript basic types

number   - floating point or integral number
boolean  - true or false
string   - literal text or template string `${x}`
function - a function
object   - non-primitive type (e.g. object, array)
void      - no type (e.g. function with no return)
never     - function that never returns normally
any       - disables type-checks, e.g. legacy code
null      - data type of null value
undefined - data type of undefined value

---

# Arrays

<v-clicks>

TS supports arrays

Use the type of the elements followed by []

Or use the generic array type `Array<elemType>`

```ts
let a: number[] = [1,2];
let b: Array<number> = [3,4];
```

transpiles to

```js
var a1 = [1,2];
var a2 = [3,4];
```

</v-clicks>

---

# Tuples

<v-clicks>

TS supports tuples

Effectively an array of mixed types

```ts
let bd: [number, string];

bd = [3, 'December']; 

let day: number = bd[0];
let month: string = bd[1]; 
```

transpiles to

```js
var bd;
bd = [3, 'December'];
var day = bd[0];
var month = bd[1];
```
</v-clicks>

---

# Enums

<v-clicks>

TS supports enums, to represent a fixed set of states

```ts
enum Color {R=1, G, B};
let c: Color = Color.R;
```

transpiles to

```js
var Color;

(function (Color) {
  Color[Color["R"] = 1] = "R";
  Color[Color["G"] = 2] = "G";
  Color[Color["B"] = 3] = "B";
})(Color || (Color = {}));

var c = Color.R;
```

Enum mnemonics can be strings

```ts
enum Color {R="rouge", G="vert", B="bleu"};
```

</v-clicks>

---

# Functions

- Typed parameters and returns
- Default parameters
- Optional parameters
- Rest parameters
- Lambda expressions

---
let arr: number[3]= 
# Typed parameters and returns

<v-clicks>

Functions in TS are similar to JS, but…

TS allows you to declare parameter and return types

TS performs type-checking

```ts
function calcTotalSalary(basic: number, 
                         bonus: number, 
                         director: boolean) : number {
    var earnings: number = basic + bonus;
    if (director) {
        earnings *= 2;
    }
    return earnings;
}
```

</v-clicks>

---

# Default parameters

<v-clicks>

You can specify default values for parameters

```ts
function calcTotalSalary(basic: number, 
                         bonus: number = 0.0, 
                         director: boolean = false) : number {
    var earnings: number = basic + bonus;
    if (director) {
        earnings *= 2;
    }
    return earnings;
}
```

Note: Default params don't have to appear after required params - you can pass undefined to use a default

</v-clicks>

---

# Optional parameters

<v-clicks>

You can indicate parameter(s) are optional

Append question mark ? after the parameter name

Optional parameters must follow required parameters

In the function, check if the client passed in a value

```ts
function calcTotalSalary(basic: number, 
                         bonus: number = 0.0, 
                         director: boolean = false,
                         offshoreSlushFund?: number) : number {
    var earnings: number = basic + bonus;
    if (offshoreSlushFund) {
        earnings += offshoreSlushFund;
    }
    if (director) {
        earnings *= 2;
    }
    return earnings;
}
```

</v-clicks>

---

# Rest parameters

<v-clicks>

You can define variadic functions via "rest" parameters

Define an array parameter, precede param name with …

Must be at the end of the parameter list

```ts
function getFullName(fname: string, ...othernames: string[]) {
    return fname + " " + othernames.join(" ");
}
```

</v-clicks>

---

# Lambda expressions

<v-clicks>

TS supports lambda expressions

() contain the params (you can omit () if only 1 param)

=> separates params from the lambda body

The lambda body is implicitly the return expression

```ts
var getFullName = (fn: string, ln: string): string => fn + ' ' + ln;
```

You invoke a lambda expression like a regular function

```ts
console.log(getFullName('Peter', 'John'));
```

</v-clicks>

---

# Classes

- Defining a simple class
- Constructors
- Read-only properties
- Encapsulation
- Constructor parameter properties
- Defining additional methods
- Defining static members

---

# Defining a simple class

<v-clicks>

TS makes it much easier to define classes

Use the class keyword

Define members using familiar OO syntax

```ts
class Employee {
    name: string = '';
    salary: number = -1;
}
```

You can create objects using familiar JS syntax

```ts
let emp1 = new Employee();
emp1.name = "Paul";
emp1.salary = 42000;
```

</v-clicks>

---

# Constructors

<v-clicks>

You can define a constructor in a class

Define a method named constructor

```ts
class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }   
}
```

```ts
let emp1 = new Employee("Lydia", 43000);
```

</v-clicks>

---

# Read-only properties

<v-clicks>

TypeScript has the concept of read-only fields

Declare a field with the readonly modifier 

Must be initialized in constructor, can't be modified after

```ts
class Circle {

    readonly radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }
}

let myCircle = new Circle(10);
console.log(myCircle.radius);   // OK
myCircle.radius = 42;           // Error
```

</v-clicks>

---
layout: two-cols
---

# Encapsulation

<v-clicks>

You can qualify members with access modifiers

public    - accessible to anyone (this is the default)

protected - accessible to this class plus subclasses

private   - accessible to this class only

You can also define getters and setters to encapsulate access to member variables

get xxx()

set xxx()

</v-clicks>

::right::

```ts
class Employee {
    private _name: string;
    private _salary: number;

    constructor(_name: string, _salary: number) {
        this._name = _name;
        this._salary = _salary;
    }   
  
    get name(): string { 
        return this._name;
    }
  
    set name(newName: string) { 
        this._name = newName;
    }
  
    get salary(): number {
        return this._salary
    }
}
```

---

# Constructor parameter properties

<v-clicks>

The examples on the previous slides declared instance variables and initialized them in the constructor

This is such a common practice that TS provides a shortcut, "constructor parameter properties" 

Define params as public/protected/private

TS automatically declares/initializes instance variables

```ts
class Employee {
    constructor(private _name: string, private _salary: number) {}   
    …
}
```

</v-clicks>

---

# Defining additional methods

<v-clicks>

You can define additional methods as necessary

Encapsulate logic and business rules for your class

```ts
class Employee {
    constructor(private _name: string, private _salary: number) {}

    payRise(amount: number): void {
        this._salary += amount;
    }
  
    isHigherTax (): boolean {
        return this._salary > 42000;
    }
    …
}
```

</v-clicks>

---
layout: two-cols
---

# Defining static members

<v-clicks>
You can define class-wide members

Belong to the whole class, not to a particular instance

To define a class wide member:
- Prefix definition with static
- Can also define as public/protected/private
- Works for member variables and methods

To access a static member, prefix with class name


</v-clicks>

::right::

```ts
class Employee {
  
    private static _taxThreshold: number = 42000;

    constructor(private _name: string, private _salary: number) {}

    isHigherTaxPayer(): boolean {
        return this._salary > Employee._taxThreshold;
    }

    static get taxThreshold(): number {
        return Employee._taxThreshold;
    }
    …
}
```

---

# Inheritance and interfaces

- Inheritance in TypeScript
- Additional inheritance techniques
- Using an interface to specify methods
- Using an interface as a property bag
- Using an interface as a func signature
- Using an interface as an array type

---

# Inheritance in TypeScript

<v-clicks>

A class can extend another class

The subclass uses the extends keyword

The subclass can override superclass methods

The subclass can invoke superclass methods and constructors, via the super keyword

Under the covers, TS inheritance is transpiled to prototypical inheritance in JavaScript

</v-clicks>

---

# Additional inheritance techniques

<v-clicks>

Additional techniques in the superclass:
- Can be abstract (cannot instantiate)
- Can have abstract methods (must override)
- Can have protected items (accessible to subclasses)

Additional techniques in client code
- Downcast via instanceof and `<type>` typecasts

</v-clicks>

---

# Using an interface to specify methods

<v-clicks>

TS allows you to define interfaces, to specify methods that must be defined in implementation classes

```ts
interface ILoggable {
    log(msg: string) : void;
}

interface ISerializable {
    serialize() : void;
}
```

A class can implement any number of interfaces
Via the implements keyword

```ts
class MyClass implements ILoggable, ISerializable {
    log(msg: string) : void {…}
    serialize() : void {…}
}
```

</v-clicks>

---

# Using an interface as a property bag

<v-clicks>

An interface can specify a property bag

```ts
interface IShape {
    cx: number;   // Required.
    cy: number;   // Required
    w: number;    // Required.
    h?: number;   // Optional.
}
```

You can use the interface type in function parameters

Compiler ensures you pass in a compatible object

```ts
function useShape(shape: IShape) : void {
    …
}
```

</v-clicks>

---

# Using an interface as a func signature

<v-clicks>

An interface can specify a function signature

Define an anonymous function inside the interface

```ts
interface ISearchFunc {
    (src: string, subStr: string): boolean;
}
```

You can use the interface when you declare a variable

Variable will point to a function of that signature

```ts
let mySearchFunc: ISearchFunc;

mySearchFunc = function(sourceString: string, subString: string) {
    return sourceString.search(subString) != -1;
}
```

</v-clicks>

---

# Using an interface as an array type

<v-clicks>
An interface can specify an array type
Define an anonymous array inside the interface
Specify data type, and index type (number/string)

```ts
interface IStringArray {
    [index: number]: string;
}
```


You can use the interface when you declare a variable
Indicates the variable is an array of the specified type

```ts
let cities: IStringArray;
cities = ["London", "Paris", "NY"];
console.log(cities[0]);
```

This example shows how to use a string index type
Effectively, it's a key-value dictionary

```ts
interface IStringDictionary {
    [index: string]: string;
}
```

Usage:

```ts
let capitalCities: IStringDictionary = {};

capitalCities["Norway"] = "Oslo";
capitalCities["UK"] = "London";
capitalCities["Romania"] = "Bucharest";

console.log(capitalCities["Norway"]);
```

</v-clicks>

---

