# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Day 1 - Introduction to React

## What is React?

React is a JavaScript library used for building user interfaces (UI), especially for web applications.

It helps developers create fast, interactive, and reusable UI components. React was developed and maintained by Meta (Facebook).

---

## Why Do We Use React?

Before React, building large and dynamic web applications was difficult because developers had to update the DOM manually.

React solves this problem by:

* Making UI development easier
* Improving application performance
* Allowing code reusability through components
* Managing complex user interfaces efficiently
* Providing a better development experience

---

## What Can We Build with React?

Using React, we can build:

* Single Page Applications (SPA)
* Dashboard Applications
* E-commerce Websites
* Social Media Platforms
* Portfolio Websites
* Admin Panels
* Blogging Platforms
* Real-time Applications
* Large Scale Web Applications

Examples:

* Facebook
* Instagram
* Netflix
* Airbnb

---

## Key Features of React

### 1. Component-Based Architecture

React applications are built using components.

A component is a reusable piece of UI.

Example:

* Navbar
* Footer
* Sidebar
* Login Form

---

### 2. Virtual DOM

React uses a Virtual DOM to improve performance.

Instead of updating the entire webpage, React updates only the parts that change.

Benefits:

* Faster rendering
* Better user experience
* Improved performance

---

### 3. Reusability

Components can be reused multiple times throughout the application.

Benefits:

* Less code duplication
* Easier maintenance
* Faster development

---

### 4. Declarative UI

In React, developers describe what the UI should look like, and React updates it automatically when data changes.

This makes code easier to understand and manage.

---

## React vs Traditional JavaScript

| Traditional JavaScript        | React                     |
| ----------------------------- | ------------------------- |
| Manual DOM updates            | Virtual DOM updates       |
| More code                     | Less code                 |
| Hard to manage large projects | Easier for large projects |
| Lower reusability             | High reusability          |

---

## Benefits of Learning React

* High industry demand
* Large community support
* Easy to learn for JavaScript developers
* Used in many modern web applications
* Strong career opportunities in frontend development

---

## Important Terms Learned Today

* React
* User Interface (UI)
* Component
* Virtual DOM
* Single Page Application (SPA)
* Reusability
* Declarative Programming

---

## Key Takeaways

* React is a JavaScript library for building user interfaces.
* React uses components to create reusable UI elements.
* Virtual DOM improves application performance.
* React is widely used in modern web development.
* React helps build fast and scalable web applications.

---

## Practice Task

1. Research popular websites built with React.
2. Understand the difference between a library and a framework.
3. Learn basic frontend technologies:

   * HTML
   * CSS
   * JavaScript

These technologies are prerequisites for learning React effectively.

## Day 1 Summary

Today was an introduction to React. You learned what React is, why it is used, its advantages over traditional JavaScript development, and the types of applications that can be built using React. You also learned about important concepts such as Components, Virtual DOM, Reusability, and SPA (Single Page Applications).




# Day 2 - React Setup & Environment Configuration

## Introduction

Before building React applications, we need to set up the development environment on our system.

Today, we learned how to prepare our machine for React development and create our first React project.

---

## Prerequisites

Before installing React, make sure the following tools are installed:

### 1. Node.js

Node.js allows JavaScript to run outside the browser and is required for React development.

Benefits:

* Runs JavaScript on the server
* Provides npm (Node Package Manager)
* Helps manage project dependencies

Check installation:

```bash
node -v
```

---

### 2. npm (Node Package Manager)

npm comes with Node.js and is used to install packages and libraries.

Check installation:

```bash
npm -v
```

---

### 3. VS Code

A popular code editor used for writing React applications.

Features:

* Fast and lightweight
* Extension support
* Integrated terminal
* Git integration

---

## Creating a React Project

One of the easiest ways to create a React project is using Vite.

Create a new project:

```bash
npm create vite@latest
```

Follow the prompts:

1. Enter project name
2. Select Framework → React
3. Select Variant → JavaScript

---

## Installing Dependencies

Move into the project folder:

```bash
cd project-name
```

Install dependencies:

```bash
npm install
```

This command downloads all required packages for the project.

---

## Running the Development Server

Start the React application:

```bash
npm run dev
```

After running this command, Vite provides a local development URL.

Example:

```text
http://localhost:5173
```

Open it in the browser to see the React application.

---

## Project Structure Overview

A basic React project contains:

```text
project-name/
│
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│
├── package.json
├── vite.config.js
└── index.html
```

---

## Important Files

### App.jsx

Main component of the application.

Used to build the UI.

---

### main.jsx

Entry point of the React application.

Connects React with the HTML page.

---

### package.json

Contains:

* Project information
* Dependencies
* Scripts
* Package versions

---

### public Folder

Stores static assets such as:

* Images
* Icons
* Static files

---

### src Folder

Contains the main application code.

Most React development happens inside this folder.

---

## Why Use Vite?

Advantages of Vite:

* Faster startup time
* Fast hot reloading
* Lightweight
* Modern development experience
* Easy project setup

---

## Key Terms Learned Today

* Node.js
* npm
* Vite
* Dependencies
* Development Server
* package.json
* App.jsx
* main.jsx

---

## Key Takeaways

* React development requires Node.js and npm.
* Vite helps create React projects quickly.
* npm install installs project dependencies.
* npm run dev starts the development server.
* Most React code is written inside the src folder.
* App.jsx is the main component of the application.

---

## Practice Task

1. Install Node.js.
2. Install VS Code.
3. Create a React project using Vite.
4. Run the project successfully.
5. Explore the project folder structure.
6. Open App.jsx and understand its role.

## Day 2 Summary

Today, you learned how to set up a React development environment. You installed the required tools, created a React project using Vite, installed dependencies, ran the development server, and explored the basic project structure.



# Day 3 - React Components

## 📅 Day 3 Overview

Today I learned about **React Components**.

Components are the building blocks of a React application. Instead of writing all UI code in one file, React allows us to split the UI into small reusable pieces called components.

---

# What is a Component?

A component is a JavaScript function that returns JSX (UI).

### Example

```jsx
function Welcome() {
  return <h1>Hello World</h1>;
}
```

This component can be used anywhere inside the application.

```jsx
<Welcome />
```

Output:

```text
Hello World
```

---

# Why Use Components?

Components help us:

* Reuse code
* Keep code organized
* Improve readability
* Make applications easier to maintain

Instead of repeating the same UI multiple times, we create one component and use it wherever needed.

---

# Creating a Component

### UserCard.jsx

```jsx
function UserCard() {
  return (
    <div>
      <h2>John Doe</h2>
      <p>Frontend Developer</p>
    </div>
  );
}

export default UserCard;
```

---

# Using a Component

### App.jsx

```jsx
import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <UserCard />
    </div>
  );
}

export default App;
```

---

# Component Naming Rules

✅ Component names should start with a capital letter.

Correct:

```jsx
function Header() {
  return <h1>Header</h1>;
}
```

❌ Incorrect:

```jsx
function header() {
  return <h1>Header</h1>;
}
```

React treats lowercase names as HTML elements.

---

# Types of Components

## 1. Functional Components

Modern React mainly uses functional components.

```jsx
function Greeting() {
  return <h1>Welcome to React</h1>;
}
```

---

## 2. Class Components

Older React applications may use class components.

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Welcome to React</h1>;
  }
}
```

Today, functional components are preferred.

---

# Reusing Components

A component can be used multiple times.

```jsx
function App() {
  return (
    <div>
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}
```

This helps avoid code duplication.

---

# Folder Structure Example

```text
src/
│
├── components/
│   ├── UserCard.jsx
│   └── Header.jsx
│
├── App.jsx
└── main.jsx
```

Keeping components in a separate folder improves project organization.

---

# Key Points

* Components are reusable UI blocks.
* Components are usually created as functions.
* Component names must start with a capital letter.
* Components return JSX.
* Components help keep code modular and organized.
* Components can be reused multiple times.

---

# Day 3 Summary

Today I learned about React Components.

Components are reusable pieces of UI that help build React applications efficiently. I learned how to create components, use them inside other components, follow naming conventions, and organize component files properly. Components make React applications cleaner, more maintainable, and easier to scale.





# 📘 react-learning — Day 4

## Topic: Styling in React

🎨 1. What is Styling in React?

Styling means adding design to your UI like colors, spacing, fonts, and layout.

In React, we can style components in multiple ways depending on the project needs.

## 🧩 2. Ways to Style in React

✅ 1. Inline CSS

We write styles directly inside the component using JavaScript objects.

function App() {
  return (
    <h1 style={{ color: "blue", fontSize: "24px" }}>
      Hello React
    </h1>
  );
}

👉 Best for small, quick styling
❌ Not good for large projects

✅ 2. External CSS File

We create a separate .css file and import it.

## App.css

.title {
  color: green;
  font-size: 30px;
}

## App.jsx

import "./App.css";

function App() {
  return <h1 className="title">Hello React</h1>;
}

👉 Most commonly used method
✔ Clean and reusable

✅ 3. CSS Modules

CSS Modules help avoid class name conflicts.

App.module.css

.title {
  color: red;
  font-size: 28px;
}

App.jsx

import styles from "./App.module.css";

function App() {
  return <h1 className={styles.title}>Hello React</h1>;
}

👉 Scoped styling (local to component)
✔ Good for medium/large projects

✅ 4. Styled Components (Optional Advanced)

This uses JavaScript to write CSS inside components.

import styled from "styled-components";

const Title = styled.h1`
  color: purple;
  font-size: 26px;
`;

function App() {
  return <Title>Hello React</Title>;
}

👉 Very flexible
❌ Requires extra library

📌 3. Key Points to Remember

* Inline styles use camelCase (e.g. fontSize)
* External CSS is best for beginners
* CSS Modules prevent naming conflicts
* Choose styling method based on project size

## 🧠 Summary of the Day

Today I learned different ways to style components in React:

Inline CSS (quick styling)
External CSS (most common)
CSS Modules (scoped styling)
Styled Components (advanced styling method)

Now I understand how to make your React UI look better and structured.



📘 react-learning — Day 5
Topic: Styling Practice in React
🎯 Objective

Practice different styling methods in React and understand when to use each one.



# Day 6 - Props in React

## What are Props?

**Props** (short for Properties) are used to pass data from a **parent component** to a **child component**.

Props make components reusable because the same component can display different data based on the values passed to it.

---

## Why Use Props?

* Pass data between components
* Make components reusable
* Create dynamic UI
* Keep components flexible

---

## Basic Example

### Child Component

```jsx
function Welcome(props) {
  return <h2>Welcome {props.name}</h2>;
}

export default Welcome;
```

### Parent Component

```jsx
import Welcome from "./Welcome";

function App() {
  return (
    <>
      <Welcome name="Rahul" />
      <Welcome name="Aman" />
      <Welcome name="Priya" />
    </>
  );
}

export default App;
```

### Output

```text
Welcome Rahul
Welcome Aman
Welcome Priya
```

---

## Props Using Destructuring

Instead of writing `props.name`, we can extract values directly.

```jsx
function Welcome({ name }) {
  return <h2>Welcome {name}</h2>;
}
```

This approach is cleaner and easier to read.

---

## Passing Multiple Props

```jsx
function Student({ name, age, course }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  );
}
```

### Parent Component

```jsx
<Student
  name="Rahul"
  age={21}
  course="React"
/>
```

---

## Props are Read-Only

Props cannot be modified inside the child component.

❌ Wrong

```jsx
props.name = "New Name";
```

✅ Correct

Use the value received from the parent.

```jsx
<h2>{props.name}</h2>
```

---

## Passing Data of Different Types

### String

```jsx
<User name="Rahul" />
```

### Number

```jsx
<User age={21} />
```

### Boolean

```jsx
<User isLoggedIn={true} />
```

### Array

```jsx
<User skills={["HTML", "CSS", "React"]} />
```

### Object

```jsx
<User user={{ name: "Rahul", age: 21 }} />
```

### Function

```jsx
<Button handleClick={showMessage} />
```

---

## Default Props

Default values can be provided if a prop is not passed.

```jsx
function Welcome({ name = "Guest" }) {
  return <h2>Welcome {name}</h2>;
}
```

---

## Key Points

* Props stand for Properties.
* Props are used to pass data from parent to child components.
* Props make components reusable.
* Props are read-only.
* Props can store strings, numbers, arrays, objects, booleans, and functions.
* Destructuring props improves readability.

---

# Day 6 Summary

Today I learned about **Props in React**.

Props are used to transfer data from a parent component to a child component. They help create reusable and dynamic components. I learned how to pass single and multiple props, use destructuring, pass different data types, and understand that props are read-only.


# Day 7 - Child Component to Parent Component Communication

## Introduction

In React, data normally flows from **Parent → Child** using Props.

Sometimes, a child component needs to send data back to its parent. React achieves this by passing a function from the parent to the child through props.

The child component calls that function and sends data to the parent.

---

## Data Flow in React

```text
Parent Component
       ↓
      Props
       ↓
Child Component

Child Component
       ↓
 Calls Function
       ↓
Parent Component
```

---

## How Child Sends Data to Parent

### Step 1: Create a Function in Parent

```jsx
function App() {
  const getData = (data) => {
    console.log(data);
  };

  return <Child sendData={getData} />;
}
```

---

### Step 2: Receive Function in Child

```jsx
function Child({ sendData }) {
  return (
    <button onClick={() => sendData("Hello Parent!")}>
      Send Data
    </button>
  );
}
```

---

### Step 3: Output

```text
Hello Parent!
```

When the button is clicked, the child component calls the parent's function and sends data.

---

## Complete Example

### Child Component

```jsx
function Child({ sendMessage }) {
  return (
    <button onClick={() => sendMessage("Message from Child Component")}>
      Send Message
    </button>
  );
}

export default Child;
```

### Parent Component

```jsx
import Child from "./Child";

function App() {
  const handleMessage = (msg) => {
    alert(msg);
  };

  return (
    <>
      <h1>Parent Component</h1>
      <Child sendMessage={handleMessage} />
    </>
  );
}

export default App;
```

---

## Passing Input Value from Child to Parent

### Child Component

```jsx
import { useState } from "react";

function Child({ getName }) {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => getName(name)}>
        Submit
      </button>
    </>
  );
}

export default Child;
```

### Parent Component

```jsx
import Child from "./Child";

function App() {
  const receiveName = (name) => {
    console.log(name);
  };

  return (
    <>
      <h1>Parent Component</h1>
      <Child getName={receiveName} />
    </>
  );
}

export default App;
```

---

## Why Use Child-to-Parent Communication?

* Send form data to parent.
* Update parent state from child.
* Trigger parent functions.
* Share information between components.

---

## Key Points

* React data flow is usually Parent → Child.
* Child cannot directly modify parent state.
* Parent passes a function as a prop.
* Child calls that function and sends data.
* This is called "lifting data up".

---

# Day 7 Summary

Today I learned how a child component can send data to a parent component.

Since React follows one-way data flow, the parent passes a function to the child through props. The child calls that function and sends data back to the parent. This technique is commonly used for form handling, state updates, and component communication.



# Day 8 - Events in React

## Introduction

Events in React allow us to respond to user actions such as:

* Clicking a button
* Typing in an input field
* Hovering over an element
* Submitting a form

React handles events using **event handlers**.

---

## Event Handling Syntax

In React, event names use **camelCase**.

### Example

```jsx
function App() {
  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

function handleClick() {
  alert("Button Clicked!");
}
```

### Important Points

* Use `onClick` instead of `onclick`.
* Pass a function reference, not a function call.
* Event names are written in camelCase.

✅ Correct

```jsx
<button onClick={handleClick}>Click</button>
```

❌ Incorrect

```jsx
<button onclick={handleClick}>Click</button>
```

---

## Click Event

The most commonly used event in React.

```jsx
function App() {
  const showMessage = () => {
    alert("Hello React!");
  };

  return (
    <button onClick={showMessage}>
      Click Me
    </button>
  );
}
```

---

## Inline Event Handler

We can also write event handlers directly inside JSX.

```jsx
<button onClick={() => alert("Button Clicked")}>
  Click
</button>
```

---

## Passing Arguments to Event Handlers

```jsx
function App() {
  const greetUser = (name) => {
    alert(`Hello ${name}`);
  };

  return (
    <button onClick={() => greetUser("John")}>
      Greet
    </button>
  );
}
```

---

## Event Object

React automatically provides an event object.

```jsx
function App() {
  const handleClick = (event) => {
    console.log(event);
  };

  return (
    <button onClick={handleClick}>
      Click
    </button>
  );
}
```

### Uses of Event Object

* Access event details
* Prevent default behavior
* Check target element

Example:

```jsx
const handleClick = (e) => {
  console.log(e.target);
};
```

---

## Input Events

### onChange Event

Triggered when input value changes.

```jsx
function App() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <input
      type="text"
      onChange={handleChange}
    />
  );
}
```

---

## Keyboard Events

### onKeyDown

Triggered when a key is pressed.

```jsx
<input
  onKeyDown={(e) =>
    console.log(e.key)
  }
/>
```

---

## Mouse Events

### onMouseEnter

```jsx
<div onMouseEnter={() => console.log("Mouse Entered")}>
  Hover Here
</div>
```

### onMouseLeave

```jsx
<div onMouseLeave={() => console.log("Mouse Left")}>
  Hover Here
</div>
```

---

## Form Submit Event

```jsx
function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">
        Submit
      </button>
    </form>
  );
}
```

### Why use preventDefault()?

By default, form submission reloads the page.

```jsx
e.preventDefault();
```

prevents the page refresh and allows React to handle the form.

---

## Common React Events

| Event        | Description                          |
| ------------ | ------------------------------------ |
| onClick      | Triggered when an element is clicked |
| onChange     | Triggered when input value changes   |
| onSubmit     | Triggered when form is submitted     |
| onKeyDown    | Triggered when a key is pressed      |
| onMouseEnter | Triggered when mouse enters element  |
| onMouseLeave | Triggered when mouse leaves element  |

---

## Best Practices

* Use meaningful function names.
* Keep event handlers small and focused.
* Use arrow functions when passing arguments.
* Avoid complex logic directly inside JSX.
* Use `preventDefault()` when handling forms.

---

## Key Takeaways

* React events use camelCase naming.
* Event handlers are attached using JSX attributes.
* Events help React respond to user interactions.
* The event object provides useful event information.
* Common events include click, input, keyboard, mouse, and form events.

📌 Day 8 Summary

Today you learned React Events, which allow applications to respond to user interactions.

Topics covered:

Event handling in React
onClick event
Inline event handlers
Passing arguments to event handlers
Event object (event / e)
onChange event
Keyboard events (onKeyDown)
Mouse events (onMouseEnter, onMouseLeave)
Form submission with onSubmit
Using preventDefault()


# Day 9: React State

## What is State?

State is a built-in React object used to store data that can change over time.

Whenever the state changes, React automatically re-renders the component and updates the UI.

### Key Points

* State stores dynamic data.
* State is managed inside a component.
* Updating state causes the component to re-render.
* State helps create interactive applications.

---

## Using State with `useState`

React provides a Hook called `useState` to create and manage state in functional components.

### Syntax

```jsx
const [state, setState] = useState(initialValue);
```

### Parameters

* `state` → Current state value.
* `setState` → Function used to update the state.
* `initialValue` → Initial value of the state.

---

## Example: Counter Application

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
```

### Output

* Initial count = 0
* Clicking the button increases the count by 1.
* React automatically updates the UI.

---

## Updating State

### Increment

```jsx
setCount(count + 1);
```

### Decrement

```jsx
setCount(count - 1);
```

### Reset

```jsx
setCount(0);
```

---

## State with String Values

```jsx
import { useState } from "react";

function User() {
  const [name, setName] = useState("John");

  return (
    <div>
      <h2>{name}</h2>

      <button onClick={() => setName("Rahul")}>
        Change Name
      </button>
    </div>
  );
}
```

---

## State with Boolean Values

```jsx
import { useState } from "react";

function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle
      </button>

      {isVisible && <h2>Hello React</h2>}
    </div>
  );
}
```

---

## State Rules

### 1. Never Modify State Directly ❌

Wrong:

```jsx
count = count + 1;
```

Correct:

```jsx
setCount(count + 1);
```

---

### 2. State Updates Trigger Re-render

Whenever state changes:

```jsx
setCount(5);
```

React updates the UI automatically.

---

### 3. State is Component-Specific

Each component maintains its own state.

```jsx
function App() {
  return (
    <>
      <Counter />
      <Counter />
    </>
  );
}
```

Each counter will have its own independent state.

---

## Why State is Important?

State allows React applications to:

* Handle user input
* Create counters
* Show/hide elements
* Manage forms
* Build interactive user interfaces

Without state, React components would display only static content.

---

## Quick Recap

* State stores data that changes.
* `useState()` is used to create state.
* Updating state re-renders the component.
* Use setter functions (`setState`) to update state.
* State can store numbers, strings, booleans, arrays, and objects.
* State makes React applications interactive.

```
```
Day 9 Summary
Learned about State in React.
Understood the purpose of the useState Hook.
Created and updated state values.
Built simple examples using numbers, strings, and booleans.
Learned that state updates automatically refresh the UI.
Understood best practices for updating state.



# Day 10 - Forms

## Introduction

Forms are used to collect user input in React applications.

Examples:
- Login Form
- Registration Form
- Contact Form
- Search Form

React handles form data using **Controlled Components**.

---

## Controlled Components

A Controlled Component is a form element whose value is controlled by React state.

### Why use Controlled Components?

- React manages the form data.
- Easy validation.
- Better control over user input.
- Single source of truth.

### Example

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Name: {name}</h3>
    </div>
  );
}

export default App;
```

---

## Input Handling

Input handling means updating state whenever a user types into an input field.

### Steps

1. Create state using useState().
2. Connect input value to state.
3. Update state using onChange event.

### Example

```jsx
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter email"
      />

      <p>Email: {email}</p>
    </div>
  );
}

export default App;
```

---

## Practice 1: Name Input

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Name Input</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Hello, {name}</p>
    </div>
  );
}

export default App;
```

### Output

- User enters a name.
- State updates instantly.
- Greeting updates automatically.

---

## Practice 2: Email Input

```jsx
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2>Email Input</h2>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <p>Email: {email}</p>
    </div>
  );
}

export default App;
```

### Output

- User enters an email.
- State stores the value.
- Display updates in real time.

---

## Mini Task: Registration Form

### Goal

Create a simple registration form using React state.

### Example

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2>Registration Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <h3>Submitted Data</h3>

      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default App;
```

---

## Key Concepts Learned

- Forms in React
- Controlled Components
- useState with form inputs
- Input Handling using onChange
- Managing multiple input fields
- Building a Registration Form

---

## Best Practice

Always use Controlled Components in React forms because React can fully manage and track form data.

📝 Day 10 Summary

Today I learned how React handles form inputs using Controlled Components.

I practiced:

Creating form inputs with useState
Handling user input using onChange
Managing name and email fields
Building a simple Registration Form
Displaying form data dynamically on the screen

This helped me understand how React controls and updates form data through state.