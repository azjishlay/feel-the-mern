# Stage 1: Frontend

## Student Instructions

> In this stage, you will build the React components needed to display todo items and add new ones.

### mern-todo

Running `create-react-app` should have given you the default React project setup. You can now remove any unnecessary files and begin to build `TodoApp` and other components you'll need for `mern-todo`.

If you're unsure what components to create, think about what a todo app is. You might use such a tool to write down items and save it for reference at a later time. So you might like to have one component that contains a form such as `TodoForm`, and another that shows a list of items such as `TodoList`. Refer back to demo example, or quickly mock up your own visual.


### data.js

* For now, store todo items as an array in a file such as `data.js` in the project root folder. This will be replaced by the database later on.

```javascript
// data.js

const data = [
  { id: 1, item: "Buy tomatoes" },
  { id: 2, item: "Pick up dry cleaning" },
  { id: 3, item: "Learn MERN" }
]

module.exports = data;
```

### index.js

* Render an instance of `TodoApp`

### TodoApp.js

* Declare `TodoApp`
* Get child components
* Get data from `data.js`
* Initialize state with `data` that is an empty array
* Return a `<div>` element that contains two child components, `TodoForm` and `TodoList`
* Pass data as a prop to `TodoList`

### TodoForm.js

* Declare `TodoForm`
* Initialize state with `id` and `item` that are empty strings
* Return a `<form>` element with an input box and submit button
* Define two event handlers
  - `handleItemChange` will update state when the input value changes
  - `handleSubmit` will update database with new state when the form is submitted

### TodoList.js

* Declare `TodoList`
* Use `reverse().map()` method to create a new array `todoItems` of `<li>` elements on every element in the prop `data` array
* Return a `<ul>` element that displays the new array

### Completed

At the end of this stage, your folder structure should resemble the following:

```
. mern-todo/
├── nodemodules/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── TodoForm.js
│   │   └── TodoList.js
│   ├── index.js
│   ├── style.css
│   ├── TodoApp.js
├── .gitignore
├── data.js
├── package.json
└── README.md
```

You can use the provided `index.html` and `style.css` in the starter files, unless you wish to create your own.

- - -

### Copyright

Coding Boot Camp © 2017. All Rights Reserved.
