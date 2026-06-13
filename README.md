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






