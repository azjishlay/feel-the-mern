# Stage 1: Frontend

## Student Instructions

> In this stage, you will build the React components needed to display todo items and add new ones.

### mern-todo

Running `create-react-app` should have given you the default React project setup. You can now remove any unnecessary files and begin to build the components you'll need for `mern-todo`.

If you're unsure what components to create, think about what a todo app is. You might use such a tool to write down items and save it for reference at a later time. So you might like to have one component that contains a form, and another that shows a list of items. Refer back to demo example, or come up with your own.

For now, store your todo items as a JSON object in a file such as `data.js` in the project root folder.

```javascript
// data.js

const data = [
  { id: 1, item: "Buy tomatoes" },
  { id: 2, item: "Pick up dry cleaning" },
  { id: 3, item: "Learn MERN" }
]

module.exports = data;
```

At this point, your folder structure should resemble the following:

```
. mern-todo/
├── nodemodules/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── TodoForm.js
│   │   └── TodoList.is
│   ├── index.js
│   ├── style.css
│   ├── TodoApp.js
├── .gitignore
├── data.js
├── package.json
└── README.md
```

Use the provided `index.html` and `style.css` in the starter files, unless you wish to create your own.

### index.js

* Render the component `TodoApp`, which will be declared in another file `TodoApp.js`.

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
```

### TodoApp.js

* `TodoApp` will contain two children components:  `TodoForm` and `TodoList`.

* Get your data from the `data.js` file you created earlier.

* Give `TodoApp` an initial state called `data` that is an empty array.

* `TodoApp` will pass data as a prop to the child `TodoList`.

```javascript
// TodoApp.js
import React, { Component } from 'react';
// get your children components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
// get your data
import DATA from '../data';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    <div className="main">
      <h2>My Full Stack Todo App</h2>
      <TodoForm />
      <TodoList data={DATA} />
    </div>
  }
}

export default TodoApp;
```

### TodoForm.js

...

### TodoList.js

...

- - -

### Copyright

Coding Boot Camp © 2017. All Rights Reserved.
