# TypeScript

**What is TypeScript:**

- TypeScript is a superset of JavaScript that compiles to plain JavaScript
- Existing JavaScript programs are alos valid TypeScript
- TypeScript is open source and was created and is maintained by Microsoft
- It was designed for development of large applications
- tsc is a compliler that compiles TypeScript in JavaScript and it is written in TypeScript
- Static defined, each time we define a variable, we must declare what type of variable is
- It works through Node.js

## Data types:
- string
- number
- Boolean
- null
- undefined
- any -> is parent class (Object) root class for all the others. It essentially disable type checking.
- void - no type returned
- Tuple - Array with fixed number of elements
- Enums - enumerated values
- Generics - specify type constraints. Great for reuse

- **Interesting is the union type**
  - Ex. const msg:number|string; - means msg variable could be of type number or string

## Object-based Classes
- TypeScript offers the ability to use classes in JavaScript
  - Object Oriented Behavior
  - Move away from **prototype-based** inheritance
  - Better Encapsulation
  - Class Inheritance
  - Access Modifiers - Public, Private, Protected

