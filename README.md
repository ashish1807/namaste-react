=================JSX===============

- JSX is different, React is different and HTML is different.
- JSX is HTML like syntax.

import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX (transpiled before it reaches the JS) - PARCEL - Babel
// JSX (babel)=> React.createElement => ReacElement-JS Object => HTMLElement(render)
const jsxHeading = <h1 id="heading">Namste React using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);

- For giving attribute in JSX use camel case.

================Components===============

Types of components

- Class based component (OLD way)
- Functional component (New way)

1. Functional component

import React from 'react';
import ReactDOM from 'react-dom/client';

const TitleComponent = () => {
return (

<h1 className="head" tabIndex="2">
Namste React using JSX
</h1>
);
};

// this will return JSX code. (Functional component)
// A JS function which return React Element
// (because JSX also returns the React element and Functional component return JSX)
const HeadingComponent = () => {
return (

<div id="container">
<h1>Namaste React Functional Component</h1>
<TitleComponent />

      // this is component composition
    </div>

);
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);

========================Ep 5=================

# Two types of Export

1. Default Export/Import

export default Component
import Component from "path"

2. Named Export/Import

export const Component
import {Component} from "path"

# React Hooks

(Normal JS utility functions)
Most important hooks

- `useState()` => Used to created superpoweful variables in React.

  `let [listOfRestaurents, setListOfRestaurent] = useState(resList);`
  listOfRestaurents = is variable creation part
  setListOfRestaurent = it is used to update `listOfRestaurents` variable

## Note: Whenever state variable updated React renderes the component.

- `useEffect()`

# 2 types of Routing

- Client side routing
- Server side routing
